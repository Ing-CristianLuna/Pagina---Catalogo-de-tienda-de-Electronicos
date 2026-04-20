const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//cargar productos
exports.obtenerProductos = async (req, res) => {
    try {
        const resultados = await prisma.producto.findMany({
            include: { marca: true, categoria: true }
        });
        res.json(resultados);
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "error al cargar productos" })
    }
}


//crear producto
exports.crearProducto = async (req, res) => {
    try {
        const error = validaProducto(req.body);
        if (error) return res.status(400).json({ mensaje: error });

        const errorforaneo = await validaForaneos(req.body);
        if (errorforaneo) return res.status(400).json({ mensaje: errorforaneo })

        const nuevo = await prisma.producto.create({
            data: construirDataBody(req.body)
        })
        res.status(201).json(nuevo)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "error al crear producto" })
    }
}


//Actualiza Producto
exports.actualizaProducto = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const error = validaProducto(req.body);
        if (error) return res.status(400).json({ mensaje: error });

        //Si no se encuentra este producto
        const producto = await prisma.producto.findUnique({
            where: { id }
        });
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" })
        }

        const errorforaneo = await validaForaneos(req.body);
        if (errorforaneo) return res.status(400).json({ mensaje: errorforaneo })

        const actualizado = await prisma.producto.update({
            data: construirDataBody(req.body),
            where: { id }
        })
        res.json(actualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al actualizar" });
    }
}


//ELIMINA PRODUCTO
exports.eliminaProducto = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const producto = await prisma.producto.findUnique({ where: { id } });
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" })
        }

        await prisma.producto.delete({
            where: { id }
        })
        res.json({ mensaje: "eliminado correctamente", id })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: "error al eliminar" })
    }
}


//FUNCIONES
function construirDataBody(body) {
    const { modelo, precio, num_serie, descripcion, imagen, marcaID, categoriaId } = body;

    return {
        modelo,
        precio: Number(precio),
        num_serie,
        descripcion,
        imagen,
        marca: { connect: { id: Number(marcaID) } },
        categoria: { connect: { id: Number(categoriaId) } }
    };
};

function validaProducto(body) {
    const { modelo, precio, num_serie, descripcion, imagen, marcaID, categoriaId } = body;

    if (!modelo || !precio || !num_serie || !descripcion || !imagen || !marcaID || !categoriaId) {
        return "Datos incompletos";
    }
    if (isNaN(precio)) {
        return "precio invaldo";
    }
    return null;
}

async function validaForaneos(body) {
    const { marcaID, categoriaId } = body;
    //Si no se encuentra la marca
    const marca = await prisma.marca.findUnique({ where: { id: Number(marcaID) } });
    //Si no se encuentra la categoria
    const categoria = await prisma.categoria.findUnique({ where: { id: Number(categoriaId) } })
    if (!categoria || !marca) {
        return "Categoria o marca no encontrada";
    }
    return null;
}