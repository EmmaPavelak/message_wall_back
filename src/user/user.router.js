const express = require('express');
const controller = require('./user.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');
const authenticationMiddleware = require('../common/authentication.middleware');
const authorizationMiddleware= require('../common/authorization.middleware');
const router = express.Router();

router.post('/login', controller.login);

router.get('/users', authenticationMiddleware, authorizationMiddleware('Administrateur'), (request, response, next) => controller.findAll(request, response, next));
router.get('/users/:id', checkIdParamMiddleware, (request, response, next) => controller.getById(request, response, next));
router.post('/registration', (request, response, next) => controller.registration(request, response, next));
router.put('/:id', authenticationMiddleware, checkIdParamMiddleware, (request, response, next) => controller.update(request, response, next)); 
router.delete('/:id', authenticationMiddleware, authorizationMiddleware('Administrateur'), checkIdParamMiddleware, (request, response, next) => controller.remove(request, response, next));

//authorizationMiddleware('Administrateur')

module.exports = router;
