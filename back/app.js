const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors")

// Establecemos que se van a usar archivos Json
app.use(express.json());

// Se importa la ruta
const productos= require("./routes/products")
const clientes = require ("./routes/clients")

app.use('/api',productos)
app.use('/api',clientes)

//Manejador de errores 
app.use(errorMiddleware)

module.exports=app

