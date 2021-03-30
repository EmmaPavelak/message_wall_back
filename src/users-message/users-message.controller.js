const service = require('./users-message.service');



const create = (request, response, next) => {
  service.save(request.body)
    .then(dto => {
      response.status(201);
      response.json(dto);
    })
    .catch(next);
};

module.exports = {
  create
}
