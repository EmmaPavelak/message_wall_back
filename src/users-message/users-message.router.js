const express = require('express');
const controller = require('./users-message.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');
const authenticationMiddleware = require('../common/authentication.middleware');
const authorizationMiddleware= require('../common/authorization.middleware');
const router = express.Router();

router.post('/',  (request, response, next) => controller.create(request, response, next)); //authenticationMiddleware,
router.get('/', (request, response, next) => controller.findAll(request, response, next));
router.get('/username/:id', checkIdParamMiddleware,(request, response, next) => controller.getByUser(request, response, next));
router.get('/:id', checkIdParamMiddleware, (request, response, next) => controller.getById(request, response, next));
router.put('/:id', authenticationMiddleware, checkIdParamMiddleware, (request, response, next) => controller.update(request, response, next)); 
router.delete('/:id', authenticationMiddleware, authorizationMiddleware('Administrateur'), checkIdParamMiddleware, (request, response, next) => controller.remove(request, response, next));

module.exports = router;