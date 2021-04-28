const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const router = require('./app.router');
const loggerMiddleware = require('./common/logger.middleware');
const errorMiddleware = require('./common/error/error.middleware');
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression())

app.use('/public', express.static('statics'));
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api', router);
app.use(errorMiddleware);

app.listen(3000);
