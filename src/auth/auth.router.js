const express = require('express');
const controller = require('./auth.controller');

const router = express.Router();

router.post('/login', controller.login);
//router.post('/registration', controller.registration);
router.post('/registration', (request, response, next) => controller.registration(request, response, next));

module.exports = router;
