const express = require('express');
const controller = require('./auth.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');

const router = express.Router();

router.post('/login', controller.login);

router.get('users', (request, response, next) => controller.findAll(request, response, next));
router.get('/users/:id', checkIdParamMiddleware, (request, response, next) => controller.getById(request, response, next));
router.post('/registration', (request, response, next) => controller.registration(request, response, next));

module.exports = router;
