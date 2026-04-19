const express = require("express");
const cors = require("cors");

const productoRutas = require("./routes/producto.routes");
const marcaRutas = require("./routes/marca.routes");
const categoriaRutas = require("./routes/categoria.routes");
const userRutas = require("./routes/user.rutes");
const userLoginRutas = require("./routes/userLogin.rutes");
const { auth } = require("./middlewares/auth.middleware");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/producto", auth, productoRutas);
app.use("/marca", auth, marcaRutas);
app.use("/categoria", auth, categoriaRutas);
app.use("/userCreate", userRutas);
app.use("/userLogin", userLoginRutas);

module.exports = app;