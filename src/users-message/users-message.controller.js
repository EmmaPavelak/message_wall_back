const service = require('./users-message.service');



const create = (request, response, next) => {
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
const getByUser = (request, response, next) => {
  const user = String(request.params.user);
  service.getByUser(user)
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
  create,
  getById,
  getByUser,
  findAll,
  update,
  remove
}
