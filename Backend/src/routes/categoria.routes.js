const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria.controller");

router.get("/", categoriaController.obtenerCategorias);
router.post("/", categoriaController.crearCategoria);
router.put("/:id", categoriaController.actualizaCategoria);
router.delete("/:id", categoriaController.eliminaCategoria);

module.exports = router;