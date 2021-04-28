const { MISSING_AUTHORIZATION } = require('./error/error-type');

const authorizationMiddleware = role => (request, response, next) => {
  if (request.user.role === role) {
    next();
  } else {
    next({ type: MISSING_AUTHORIZATION })
  }
  console.log(request.user);
};

module.exports = authorizationMiddleware;
