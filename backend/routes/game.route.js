const express = require('express');
const router = express.Router();

const register_controller = require('../controllers/register.controller');

router.post('/cadastrar', register_controller.register_create);

module.exports = router;