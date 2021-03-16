const { RESOURCE_NOT_FOUND } = require('./error/error-type');

const routeNotFoundMiddleware = (request, response, next) => {
  next({ type: RESOURCE_NOT_FOUND, param: request });
};

module.exports = routeNotFoundMiddleware;
