const model = require('../user/user.model');

const toDto = model => ({
  id: model.id,
  firstname: model.firstname,
  lastname: model.lastname,
  username: model.username,  
  email: model.email,
  password: model.password
});

const toModel = dto => new model(dto);


module.exports = {
  toDto,
  toModel
};
