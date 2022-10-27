const mongoose = require ("mongoose")


const clientesSchema= mongoose.Schema({
    nombre:{
        type :String,
        required:[true,"Por favor registre el nombre del cliente."],
        trim: true,
        maxLength: [80, "El nombre no debe exceder los 80 caracteres. "]
    }, 
    correo:{
        type :String,
        required:[true,"Por favor registre el email del cliente."],
        trim: true,
        maxLength: [80, "el mail del cliente no debe exceder los 80 caracteres. "]
    }, 
    celular:{
        type:String,
        required: [true,"Por favor registre el número de celular del cliente"],
        maxLength:[10, "Recuerde que el número de celular posee 10 digitos"],
        
    }
})

module.exports= mongoose.model("clientes",clientesSchema)