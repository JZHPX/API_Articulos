const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const articuloRoutes = require("./routes/articuloRoutes");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON

//Gestión de las rutas usando el middleware
app.use("/api", articuloRoutes);
app.use(express.json());
console.log('MONGO_URI:', process.env.MONGO_URI); //verificar con
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
