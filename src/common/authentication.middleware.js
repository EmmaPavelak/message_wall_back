const tokenService = require('./token.service');

const extractToken = request => {
  return request.headers.authorization.replace('Bearer ', '');
}

const authenticationMiddleware = (request, response, next) => {
  const token = extractToken(request);
  tokenService.tokenIsValid(token)
    .then(() => next())
    .catch(next);
};

module.exports = authenticationMiddleware;
