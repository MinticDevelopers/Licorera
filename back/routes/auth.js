const express = require("express");
const { registroUsuario,
    loginUser,
    logOut,
    forgotPassword,
    resetPassword,
    getUserProfile, 
    updatePassword,
    updateProfile,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser} = require("../controllers/authController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route('/usuario/registro').post(registroUsuario)
router.route('/login').post(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
router.route('/forgotPassword').post(forgotPassword)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/usuarioLogueado').get(isAuthenticatedUser ,getUserProfile)
router.route('/usuarioUpdatePassword').put(isAuthenticatedUser, updatePassword)
router.route('/usuarioUpdateProfile').put(isAuthenticatedUser,updateProfile)

//rutas de administrador
router.route('/admin/viewUsers').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
router.route('/admin/uptadeUser/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
router.route('/admin/deleteUser/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteUser)

module.exports = router