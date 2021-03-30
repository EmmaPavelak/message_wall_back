const express = require('express');
const controller = require('./users-message.controller');

const router = express.Router();

router.post('/users-message', (request, response, next) => controller.create(request, response, next));

module.exports = router;