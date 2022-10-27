const express = require("express");
const app = express();

// Establecemos que se van a usar archivos Json
app.use(express.json());

// Se importa la ruta
const productos= require("./routes/products")
const clientes = require ("./routes/clients")

app.use('/api',productos)
app.use('/api',clientes)


module.exports=app