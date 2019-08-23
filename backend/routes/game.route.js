const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
router.use(bodyParser.json({ limit: '50mb' }));

const register_controller = require('../controllers/register.controller');
const login_controller = require('../controllers/login.controller');
const ranking_controller = require('../controllers/ranking.controller');

router.post('/cadastrar', register_controller.register_create);

router.post('/login', login_controller.login);

router.get('/ranking', ranking_controller.ranking);

module.exports = router;