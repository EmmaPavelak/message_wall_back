const model = require('./users-message.model');

const toDto = model => ({
  id: model.id,
  username: model.username,
  message: model.message
});

const toModel = dto => new model(dto);


module.exports = {
  toDto,
  toModel
};
