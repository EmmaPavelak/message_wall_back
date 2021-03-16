const express = require('express');
const controller = require('./character.controller');
const checkIdParamMiddleware = require('../common/check-id-param.middleware');
const authenticationMiddleware = require('../common/authentication.middleware');

const characterRouter = express.Router();

characterRouter.get('/', (request, response, next) => controller.findAll(request, response, next));
characterRouter.get('/:id', checkIdParamMiddleware, (request, response, next) => controller.get(request, response, next));
characterRouter.post('/', authenticationMiddleware, (request, response, next) => controller.create(request, response, next));
characterRouter.put('/:id', authenticationMiddleware, checkIdParamMiddleware, (request, response, next) => controller.update(request, response, next));
characterRouter.delete('/:id', authenticationMiddleware, checkIdParamMiddleware, (request, response, next) => controller.remove(request, response, next));

module.exports = characterRouter;
