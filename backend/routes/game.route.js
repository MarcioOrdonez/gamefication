const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
router.use(bodyParser.json({ limit: '50mb' }));

const register_controller = require('../controllers/register.controller');
const login_controller = require('../controllers/login.controller');

router.post('/cadastrar', register_controller.register_create);

router.post('/login', login_controller.login);

module.exports = router;