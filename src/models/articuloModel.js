const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autores: {
    type: [String],  // Lista de nombres
    required: true,
  },
  anioPublicacion: {
    type: Number,
    required: true,
  },
  resumen: {
    type: String,
    required: true,
  },
  cantidadReferencias: {
    type: Number,
    required: true,
  },
  baseDatos: {
    type: String,
    required: true,
  },
  publicadoEn: {
    type: String,
    required: true,
  },
  enlace: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Articulo', articuloSchema);