const app = require("./app") //Acá llamamos el objeto "app" del archivo "app.js"
const connectDatabase = require("./config/Conexion_a_BD");
const cloudinary= require("cloudinary")

//Establecer el archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path:'config/config.env'})

//Configurar base de datos 

connectDatabase();

//se configura cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


//Se llama al servidor
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})