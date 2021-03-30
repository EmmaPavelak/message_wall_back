const MessageModel = require('./users-message.model');
const { ValidationError } = require('sequelize');
const { RESOURCE_ID_NOT_FOUND, MISSING_RESOURCE_FIELD } = require('../common/error/error-type');


const create = model => {
  return MessageModel.create(model)
    .catch(error => {
      if (error instanceof ValidationError) {
        return Promise.reject({ type: MISSING_RESOURCE_FIELD, param: error.errors[0].path });
      }
      return Promise.reject(error);
    });
};


module.exports = {  
  create
}
