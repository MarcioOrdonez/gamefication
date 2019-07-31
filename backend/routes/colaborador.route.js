const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const cadastro_controller = require('../controllers/colaborador.controller');

router.post('/cadastrar', cadastro_controller.cadastro_create);

module.exports = router;