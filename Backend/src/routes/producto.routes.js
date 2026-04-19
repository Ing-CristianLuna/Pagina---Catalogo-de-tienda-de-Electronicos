const express = require("express");
const router = express.Router();
const productoController = require("../controllers/producto.controller");

router.get("/", productoController.obtenerProductos);
router.post("/", productoController.crearProducto);
router.put("/:id", productoController.actualizaProducto);
router.delete("/:id", productoController.eliminaProducto);

module.exports = router;