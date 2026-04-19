const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//OBTENER
exports.obtenerMarcas = async (req, res) => {
    try {
        const resultado = await prisma.marca.findMany();
        res.json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al obtener marcas" });
    }
}


//CREAR
exports.createMarca = async (req, res) => {
    try {
        const error = validaDatos(req.body);
        if (error) return res.status(400).json({ mensaje: error });

        const nuevo = await prisma.marca.create({
            data: dataBody(req.body)
        })
        res.status(201).json(nuevo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al crear marca" })
    }
}


//ACTUALIZAR
exports.actualizaMarca = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const error = validaDatos(req.body);
        if (error) return res.status(400).json({ mensaje: error });

        const hayMarca = await prisma.marca.findUnique({ where: { id } })
        if (!hayMarca) return res.status(404).json({ mensaje: "No se encontro la marca" });

        const actualizado = await prisma.marca.update({
            where: { id },
            data: dataBody(req.body)
        })

        res.json(actualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al actualizar marca" })
    }
}


//ELIMINAR
exports.eliminaMarca = async (req, res) => {
    try {
        const id = Number(req.params.id)

        const hayMarca = await prisma.marca.findUnique({ where: { id } })
        if (!hayMarca) return res.status(404).json({ mensaje: "No se encontro la marca" });

        await prisma.marca.delete({ where: { id } });
        res.json({ mensaje: "eliminado correctamente", id });

    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al eliminar" })
    }
}


//FUNCIONES
function validaDatos(body) {
    const { nombre, logo, descripcion } = body;
    if (!nombre || !logo || !descripcion) {
        return "datos incompletos";
    }
    return null;
}

function dataBody(body) {
    const { nombre, logo, descripcion } = body;

    return {
        nombre, logo, descripcion
    };
}