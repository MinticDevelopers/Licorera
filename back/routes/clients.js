const express = require("express")


const router= express.Router();

const {getClientes, newCliente, UpdateClient, deleteClient, getClientesByID}= require("../controllers/clientesController")

router.route('/clientes').get(getClientes)
router.route('/cliente/nuevo').post(newCliente);
router.route('/cliente/:id').get(getClientesByID);
router.route('/cliente/:id').put(UpdateClient);
router.route('/cliente/:id').delete(deleteClient);

module.exports=router;