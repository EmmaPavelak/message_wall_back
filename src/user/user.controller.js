const service = require('./user.service');

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

const findAll = (request, response, next) => {
  service.findAll()
  .then(dto => {
    response.status(200);
    response.json(dto);
  })
    .catch(next);
};

const getById = (request, response, next) => {
  const id = Number(request.params.id);
  service.getById(id)
  .then(dto => {
    response.status(200);
    response.json(dto);
  })
    .catch(next);
};
const update = (request, response, next) => {
  const id = Number(request.params.id);
  service.save(request.body, id)
    .then(dto => response.json(dto))
    .catch(next);
};

const remove = (request, response, next) => {
  const id = Number(request.params.id);
  service.remove(id)
    .then(() => {
      response.status(204);
      response.json();
    })
    .catch(next);
};
module.exports = {
  login,
  registration,
  getById,
  findAll,
  update,
  remove
}
