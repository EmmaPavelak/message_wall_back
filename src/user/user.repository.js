const UserModel = require('./user.model');
const { ValidationError } = require('sequelize');
const { RESOURCE_ID_NOT_FOUND, MISSING_RESOURCE_FIELD } = require('../common/error/error-type');

const findByCredentials = (username, password) => {
  return UserModel.findOne({ having: { username, password }, rejectOnEmpty: false });
};

const create = model => {
  return UserModel.create(model)
    .catch(error => {
      if (error instanceof ValidationError) {
        return Promise.reject({ type: MISSING_RESOURCE_FIELD, param: error.errors[0].path });
      }
      return Promise.reject(error);
    });
};


const update = model => {
  return UserModel.update(model, { where: { id: model.id } })
    .then(([affectedRowsCount]) => {
      if (affectedRowsCount) {
        return model;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: model.id });
      }
    });
};

const remove = id => {
  return UserModel.destroy({ where: { id } })
    .then((affectedRowsCount) => {
      if (affectedRowsCount) {
        return undefined;
      } else {
        return Promise.reject({ type: RESOURCE_ID_NOT_FOUND, param: id });
      }
    });
};
module.exports = {
  findByCredentials,
  create,
  update,
  remove
}
