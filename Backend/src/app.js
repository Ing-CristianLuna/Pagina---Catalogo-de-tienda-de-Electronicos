const express = require("express");
const cors = require("cors");

const productoRutas = require("./routes/producto.routes");
const marcaRutas = require("./routes/marca.routes");
const categoriaRutas = require("./routes/categoria.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/producto", productoRutas);
app.use("/marca", marcaRutas);
app.use("/categoria", categoriaRutas);

module.exports = app;