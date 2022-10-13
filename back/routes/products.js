const express = require("express")
const router = express.Router();

//Se importa la respuesta Json desde el controlador
const {getProducts} = require ("../controllers/productsController")

//Se establece en que ruta se ven los productos (getProducts)
router.route('/products').get(getProducts)

module.exports=router;