const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre"],
        maxlength: [120, "El nombre no puede exceder los 120 caracteres"]
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Se solicita ingresar un email valido"]
    },
    password: {
        type: String,
        required: [true, "Por favor ingrese una contraseña"],
        minlength: [8, "La contraseña minima es de 8 caracteres"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },

    //Reinicio de contrasenia
    resetPasswordToken: String,
    resetPasswordExpire: Date

})

//Encriptacion de contrasena
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model("auth", usuarioSchema)