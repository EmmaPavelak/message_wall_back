const model = require('../users-message.model');

const toDto = model => ({
  id: model.id,
  firstname: model.firstname,
  lastname: model.lastname, 
  email: model.email,
  message: model.message
});

const toModel = dto => new model(dto);


module.exports = {
  toDto,
  toModel
};
