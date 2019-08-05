const express = require('express');
const router = express.Router();

const register_controller = require('../controllers/register.controller');
const login_controller = require('../controllers/login.controller');

router.post('/cadastrar', register_controller.register_create);

router.post('/login', login_controller.login);

module.exports = router;