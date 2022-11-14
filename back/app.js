const express = require("express"); //Ya puedo utilizar métodos que vienen con esta clase
const app = express(); //Creamos un objeto con las características de "express"

// Establecemos que se van a usar archivos Json
app.use(express.json());

// Se importa la ruta
const productos= require("./routes/products")
const clientes = require ("./routes/clients")

app.use('/api',productos)
app.use('/api',clientes)


module.exports=app //Nos sirve para poder llamar este objeto desde otra parte