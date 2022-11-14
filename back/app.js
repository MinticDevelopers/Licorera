const express = require("express"); //Ya puedo utilizar métodos que vienen con esta clase
const app = express(); //Creamos un objeto con las características de "express"
const errorMiddleware = require("./middleware/errors")

// Establecemos que se van a usar archivos Json
app.use(express.json());

// Se importa la ruta
const productos= require("./routes/products")
const usuarios = require("./routes/auth")


app.use('/api',productos)
app.use('/api',usuarios)

//Manejador de errores 
app.use(errorMiddleware)

module.exports=app //Nos sirve para poder llamar este objeto desde otra parte