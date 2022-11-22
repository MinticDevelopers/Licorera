const express = require("express")
const router = express.Router();

//Se importa la respuesta Json desde el controlador
const { getProducts, newProduct, getProductById, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview } = require("../controllers/productsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//Se establece en que ruta se ven los productos (getProducts).
router.route('/productos').get(getProducts)

//Establecemos desde que ruta queremos ver el postProductos.
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"),newProduct);

//Se establece la ruta para buscar producto por ID.
router.route('/producto/:id').get(getProductById);

// Se establece la ruta para actualizar los productos.
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct);

//Se establece la ruta para eliminar un producto
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct);


// Rutas review
router.route('/updateReview').put(isAuthenticatedUser, createProductReview)
router.route('/verReviews').get(isAuthenticatedUser, getProductReviews)
router.route('/deleteReview').delete(isAuthenticatedUser, deleteReview)

//Se exporta el modelo.
module.exports = router;

