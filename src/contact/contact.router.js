const express = require('express');
const controller = require('./contact.controller');

const router = express.Router();

router.post('/contact', (request, response, next) => controller.create(request, response, next));

module.exports = router;