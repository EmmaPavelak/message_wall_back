const MessageModel = require('./users-message.model');
const { ValidationError } = require('sequelize');
const { RESOURCE_ID_NOT_FOUND, MISSING_RESOURCE_FIELD } = require('../common/error/error-type');


const findAll = () => {
  return MessageModel.findAll();
};

const getById = id => {
  return MessageModel.findByPk(id)
    .then(model => {
      if (model) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    })
};
const getByUser = user => {
  return MessageModel.findAll({ where: { idUser: user} }) 
    .then(model => {
      if (model) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    })
};
const getByChannel = channel => {
  return MessageModel.findAll({ where: { idChannel: channel} , 
      order: [
        ['id', 'ASC']]})
    .then(model => {
      if (model) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    })
};

const create = model => {
  return MessageModel.create(model)
    .catch(error => {
      if (error instanceof ValidationError) {
        return Promise.reject({ type: MISSING_RESOURCE_FIELD, param: error.errors[0].path });
      }
      return Promise.reject(error);
    });
};
const update = model => {
  return MessageModel.update(model, { where: { id: model.id } })
    .then(([affectedRowsCount]) => {
      if (affectedRowsCount) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: model.id });
      }
    });
};

const remove = id => {
  return MessageModel.destroy({ where: { id } })
    .then((affectedRowsCount) => {
      if (affectedRowsCount) {
        return undefined;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    });
  };

module.exports = {  
  create,
  update,
  remove,
  findAll,
  getById,
  getByUser,
  getByChannel
}
