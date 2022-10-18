const app = require("./app")
const connectDatabase = require("./config/Conexion_a_BD");

//Establecer el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path:'back/config/config.env'})

//Configurar base de datos 

connectDatabase();

//Se llama al servidor
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})