const express = require('express');
const authRouter = require('./auth/auth.router');
const contactRouter = require('./contact/contact.router');
const usersmessageRouter = require('./users-message/users-message.router');
const routeNotFoundMiddleware = require('./common/route-not-found.middleware');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/contact', contactRouter);
router.use('/users-message', usersmessageRouter);
router.use(routeNotFoundMiddleware);

module.exports = router;
