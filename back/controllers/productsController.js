const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");//importación del schema productos
const ErrorHandler = require("../utils/errorHandler");

//Ver la lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {


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
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
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


//Crear nuevo producto /api/producto/nuevo
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//Actualizar un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
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
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
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


//Crear o actualizar una review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comentario, idProducto } = req.body;

    const opinion = {
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto);

    const isReviewed = product.opiniones.find(item =>
        item.nombreCliente === req.user.nombre)

    if (isReviewed) {
        product.opiniones.forEach(opinion => {
            if (opinion.nombreCliente === req.user.nombre) {
                opinion.comentario = comentario,
                    opinion.rating = rating
            }
        })
    } else {
        product.opiniones.push(opinion)
        product.numCalificaciones = product.opiniones.length
    }

    // Promediar la calificacion
    product.calificacion = product.opiniones.reduce((acc, opinion) =>
        opinion.rating + acc, 0) / product.opiniones.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
        message: "Su opinión se ha guardado correctamente"
    })

})

//Ver todas las review de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.id)

    res.status(200).json({
        success: true,
        opiniones: product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opiniones = product.opiniones.filter(opinion =>
        opinion._id.toString() !== req.query.idReview.toString());

    const numCalificaciones = opiniones.length;

    const calificacion = product.opiniones.reduce((acc, Opinion) =>
        Opinion.rating + acc, 0) / opiniones.length;

    await producto.findByIdAndUpdate(req.query.idProducto, {
        opiniones,
        calificacion,
        numCalificaciones
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        message: "review eliminada correctamente"
    })

})


