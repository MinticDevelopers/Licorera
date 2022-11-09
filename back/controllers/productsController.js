const producto = require("../models/productos")//importación del schema productos

//Ver la lista de productos
exports.getProducts = async (req, res, next) => {
    const productos = await producto.find();

    if (!productos) {
        return res.status(404).json({
            success: false,
            error: true
        })
    }

    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById = async (req, res, next) => {
    const product = await producto.findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'No se encontro el producto con el ID especificado',
            error: true
        })
    }
    res.status(200).json({
        success: true,
        message: "A continuación encuentras información sobre tu producto: ",
        product
    })
}


//Crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

//Actualizar un producto
exports.updateProduct = async (req, res, next) => {
    // Se crea una variable modificable
    let product = await producto.findById(req.params.id)
    //Se verifica que el producto no existe para finalizar el proceso
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'No se encontro el producto con el ID especificado'
        })
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
}

//Eliminar un producto
exports.deleteProduct = async (req, res, next) => {
    // Se crea una variable modificable
    const product = await producto.findById(req.params.id)

    //Se verifica que el producto no existe para finalizar el proceso
    if (!product) {
        //Si el objeto no existe, return termina el metodo
        return res.status(404).json({
            success: false,
            message: 'No se encontro el producto con el ID especificado'
        })
    }

    // Si no se encontro el Id especificado se rompe la ejecucion y se salta el método
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
    })
}

