const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ mensaje: "token invalido" });

    try {
        const decoded = jwt.verify(token, "secreto_seguro");
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ mensaje: "token invalido" });
    }
} 