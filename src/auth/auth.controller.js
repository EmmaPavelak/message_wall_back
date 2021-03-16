const service = require('./auth.service');

const login = (request, response, next) => {
  service.login(request.body)
    .then(token => response.json({
      token
    }))
    .catch(next);
};

const registration = (request, response, next) => {
  service.save(request.body)
    .then(dto => {
      response.status(201);
      response.json(dto);
    })
    .catch(next);
};

module.exports = {
  login,
  registration
}
