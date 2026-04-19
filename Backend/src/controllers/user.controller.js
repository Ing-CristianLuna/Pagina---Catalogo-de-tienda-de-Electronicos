const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    try {
        const { nombre, correo, password, rol } = req.body;
        if (!nombre || !correo || !password) return res.status(400).json({ mensaje: "Datos incompletos" });

        const hash = await bcrypt.hash(password, 10);

        const usuarioCreado = await prisma.user.create({
            data: { nombre, correo, password: hash, rol }
        })

        const token = jwt.sign(
            { id: usuarioCreado.id, rol: usuarioCreado.rol },
            "secreto_seguro",
            { expiresIn: "8h" }
        );
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "error al crear usuario" })
    }
}


exports.loginUser = async (req, res) => {
    try {
        const { correo, password } = req.body;
        if (!correo || !password) return res.status(400).json({ mensaje: "Datos incompletos" });

        const usuario = await prisma.user.findUnique({ where: { correo: correo } })
        if (!usuario) return res.status(400).json({ mensaje: "No se encontro el usuario" });

        const validaPassword = await bcrypt.compare(password, usuario.password);
        if (!validaPassword) return res.status(400).json("contraseña incorrecta");

        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol },
            "secreto_seguro",
            { expiresIn: "8h" }
        )
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "error al iniciar sesion" });
    }
}