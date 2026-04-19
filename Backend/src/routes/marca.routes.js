const express = require("express");
const router = express.Router();
const marcasController = require("../controllers/marca.controller");

router.get("/", marcasController.obtenerMarcas);
router.post("/", marcasController.createMarca);
router.put("/:id", marcasController.actualizaMarca);
router.delete("/:id", marcasController.eliminaMarca);

module.exports = router;