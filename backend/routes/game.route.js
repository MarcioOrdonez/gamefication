const express = require('express');
const router = express.Router();

const cadastro_controller = require('../controllers/colaborador.controller');

router.post('/cadastrar', cadastro_controller.cadastro_create);

module.exports = router;