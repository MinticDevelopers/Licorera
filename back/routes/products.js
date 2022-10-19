const express=require("express")
const router=express.Router();

//Se importa la respuesta Json desde el controlador
const {getProducts, newProduct} = require("../controllers/productsController") 

//Se establece en que ruta se ven los productos (getProducts)
router.route('/productos').get(getProducts)
//Establecemos desde que ruta queremos ver el postProductos
router.route('/producto/nuevo').post(newProduct); 

//Se exporta el modelo.
module.exports=router;