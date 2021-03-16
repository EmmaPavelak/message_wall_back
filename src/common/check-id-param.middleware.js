const { BAD_RESOURCE_ID_FORMAT } = require('./error/error-type');

const checkIdParamMiddleware = (request, response, next) => {
  const id = Number(request.params.id);
  if (isNaN(id)) {
    next({ type: BAD_RESOURCE_ID_FORMAT, param: request.params.id });
  } else {
    next();
  }
};

module.exports = checkIdParamMiddleware;
