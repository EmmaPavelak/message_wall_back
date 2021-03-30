const model = require('./user.model');
//const bcrypt = require('bcrypt');
//const saltRounds = 10;
var sha1 = require('sha1');

const toDto = model => ({
  id: model.id,
  firstname: model.firstname,
  lastname: model.lastname,
  username: model.username,  
  email: model.email,
  password: sha1(model.password),//bcrypt.hashSync(model.password, saltRounds),
  tel:model.tel,
  address:model.address,
  birthDate:model.birthDate
});


const toModel = dto => new model(dto);


module.exports = {
  toDto,
  toModel
};
