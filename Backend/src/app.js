const express = require("express");
const cors = require("cors");

const productoRutas = require("./routes/producto.routes")
const app = express();


app.use(cors());
app.use(express.json());
app.use("/producto", productoRutas);

module.exports = app;