const app = require("./app")

//Establecer el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path: 'back/config/config.env'})

//Se llama al servidor
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})