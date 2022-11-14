const User = require("../models/auth")
const ErrorHandler= require ("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario = catchAsyncErrors (async (req, res, next)=>{
    const{nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"5ac69e04c061f0.400875961522966020788",
            url:"https://img2.freepng.es/20180405/acq/kisspng-male-avatar-user-profile-clip-art-profile-5ac69e04c061f0.400875961522966020788.jpg"
        }
    })

    res.status(201).json({
        success:true,
        user
    })
})