const express=require("express")
const router=express.Router();

//Se importa la respuesta Json desde el controlador
const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") 

//Se establece en que ruta se ven los productos (getProducts).
router.route('/productos').get(getProducts);

//Establecemos desde que ruta queremos ver el postProductos.
router.route('/producto/nuevo').post(newProduct); 

//Se establece la ruta para buscar producto por ID.
router.route('/producto/:id').get(getProductById);

// Se establece la ruta para actualizar los productos.
router.route('/producto/:id').put(updateProduct);

//Se establece la ruta para eliminar un producto
router.route('/producto/:id').delete(deleteProduct);

//Se exporta el modelo.
module.exports=router;

