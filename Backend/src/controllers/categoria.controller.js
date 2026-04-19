const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//OBTENER
exports.obtenerCategorias = async (req, res) => {
    try {
        const resultados = await prisma.categoria.findMany();
        res.json(resultados);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al obtener datos" })
    }
}

//CREAR
exports.crearCategoria = async (req, res) => {
    try {
        const error = validaDatos(req.body);
        if (error) return res.status(400).json({ mensaje: error })

        const creado = await prisma.categoria.create({
            data: dataBody(req.body)
        })
        res.json(creado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al crear" })
    }
}

//ACTUALIZAR
exports.actualizaCategoria = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const error = validaDatos(req.body);
        if (error) return res.status(400).json({ mensaje: error });

        const errorNoHayCategoria = await verificaSiHayCategoria(id);
        if (errorNoHayCategoria) return res.status(400).json({ mensaje: errorNoHayCategoria });

        const actualizado = await prisma.categoria.update({
            where: { id },
            data: dataBody(req.body)
        })
        res.json(actualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al actualizar" });
    }
}

//ELIMINA
exports.eliminaCategoria = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const errorNoHayCategoria = await verificaSiHayCategoria(id);
        if (errorNoHayCategoria) return res.status(400).json({ mensaje: errorNoHayCategoria });

        await prisma.categoria.delete({ where: { id } })
        res.json({ mensaje: "eliminado correctamente", id })
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al eliminar" })
    }
}


function validaDatos(body) {
    const { categoria } = body;
    if (!categoria) {
        return "datos incompletos o vacios";
    }
    return null;
}

function dataBody(body) {
    const { categoria } = body;
    return {
        categoria
    }
}

async function verificaSiHayCategoria(id) {
    const hayCategoria = await prisma.categoria.findUnique({ where: { id: id } });
    if (!hayCategoria) return "error, no hay categoria";
    return null;
}