const producto = require ("../models/productos")//importación del schema productos

//ver la lista de productos
exports.getProducts = (req,res,next)=>{
    res.status(200).json({
        sucess:true,
        message:"En esta ruta usted podra ver todos los productos"
    })
}

//crear nuevo producto /api/productos
exports.newProducto=async(req,res,next)=>{
    const producto= await producto.create(req.body);

    res.status(201).json({
        sucess:true,
        producto
    })
}