const express = require("express")
const router = express.Router();

//Se importa la respuesta Json desde el controlador
const {getProducts, newProducto} = require ("../controllers/productsController")

//Se establece en que ruta se ven los productos (getProducts)
router.route('/products').get(getProducts)
router.route('/producto/nuevo').post(newProducto);//Establecemos desde que ruta queremos ver el postProducts

module.exports=router;
