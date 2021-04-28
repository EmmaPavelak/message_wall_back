const tokenService = require('./token.service');

const extractToken = request => {
  return request.headers.authorization.replace('Bearer ', '');
}

const authenticationMiddleware = (request, response, next) => {
  Promise.resolve()
    .then(() => extractToken(request))
    .then(token => tokenService.tokenIsValid(token))
    .then(payload => {
      request.user = payload;
      next();
    })
    .catch(next);
};
module.exports = authenticationMiddleware;
