const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");//importación del schema productos
const ErrorHandler = require("../utils/errorHandler");

//Ver la lista de productos
exports.getProducts = catchAsyncErrors (async (req, res, next) => {
    const productos = await producto.find();

    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }

    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
})

//Ver un producto por ID
exports.getProductById = catchAsyncErrors (async (req, res, next) => {
    const product = await producto.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    res.status(200).json({
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})


//Crear nuevo producto /api/productos
exports.newProduct = catchAsyncErrors (async (req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//Actualizar un producto
exports.updateProduct = catchAsyncErrors (async (req, res, next) => {
    // Se crea una variable modificable
    let product = await producto.findById(req.params.id)
    //Se verifica que el producto no existe para finalizar el proceso
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    //Si el producto ya existia se actualizan los datos
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        //Se validan los atributos nuevos
        new: true,
        runValidators: true
    });

    //Se da una respuesta positiva si se pudo actualizar los datos
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        product
    })
})

//Eliminar un producto
exports.deleteProduct = catchAsyncErrors (async (req, res, next) => {
    // Se crea una variable modificable
    const product = await producto.findById(req.params.id)

    //Se verifica que el producto no existe para finalizar el proceso
    if (!product) {
        //Si el objeto no existe, return termina el metodo
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    // Si no se encontro el Id especificado se rompe la ejecucion y se salta el método
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })
})

