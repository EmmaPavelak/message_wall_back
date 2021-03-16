const characterService = require('./character.service');

const findAll = (request, response, next) => {
  characterService.findAll()
    .then(dtos => response.json(dtos))
    .catch(next);
};

const get = (request, response, next) => {
  const id = Number(request.params.id);
  characterService.get(id)
    .then(dto => response.json(dto))
    .catch(next);
};

const create = (request, response, next) => {
  characterService.save(request.body)
    .then(dto => {
      response.status(201);
      response.json(dto);
    })
    .catch(next);
};

const update = (request, response, next) => {
  const id = Number(request.params.id);
  characterService.save(request.body, id)
    .then(dto => response.json(dto))
    .catch(next);
};

const remove = (request, response, next) => {
  const id = Number(request.params.id);
  characterService.remove(id)
    .then(() => {
      response.status(204);
      response.json();
    })
    .catch(next);
};

module.exports = {
  findAll: findAll,
  get: get,
  create: create,
  update: update,
  remove: remove
};
