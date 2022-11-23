const express = require("express"); //Ya puedo utilizar métodos que vienen con esta clase
const app = express(); //Creamos un objeto con las características de "express"
const errorMiddleware = require("./middleware/errors")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')


// Establecemos que se van a usar archivos Json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());



// Se importan las rutas
const productos = require("./routes/products")
const usuarios = require("./routes/auth")
const ordenes = require("./routes/orders")


app.use('/api', productos)
app.use('/api', usuarios)
app.use('/api', ordenes)

//Manejador de errores 
app.use(errorMiddleware)

module.exports = app //Nos sirve para poder llamar este objeto desde otra parte