const express = require("express");
const router = express.Router(); //manejador de rutas de express
const articuloSchema = require("../models/articuloModel");

//nuevo artículo
router.post("/articulos", (req, res) => {
  const articuloModel = new articuloSchema(req.body);
  articuloModel
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/articulos", (req, res) => {
  articuloSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
});


// Consultar artículo por id
router.get("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findById(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Artículo no encontrado" });
      res.json(data);
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});

// Modificar artículo por id
router.put("/articulos/:id", (req, res) => {
  const { id } = req.params;

  const {
    titulo,
    autores,
    anioPublicacion,
    resumen,
    cantidadReferencias,
    baseDatos,
    publicadoEn,
    enlace,
    pdf,
  } = req.body;

  articuloSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          titulo,
          autores,
          anioPublicacion,
          resumen,
          cantidadReferencias,
          baseDatos,
          publicadoEn,
          enlace,
          pdf,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});



// Eliminar artículo por id
router.delete("/articulos/:id", (req, res) => {
  const { id } = req.params;
  articuloSchema
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) return res.status(404).json({ message: "Artículo no encontrado" });
      res.json({ message: "Artículo eliminado correctamente", data });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
});
module.exports = router;
