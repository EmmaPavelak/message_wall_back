const jwt = require('jsonwebtoken');
const repository = require('./user.repository');
const mapper = require('./user.mapper');
const tokenService = require('../common/token.service');
const { INVALID_CREDENTIALS } = require('../common/error/error-type');
//const bcrypt = require('bcrypt');
var sha1 = require('sha1');




class AuthService {
  login(credentials) {
    return repository.findByCredentials(credentials.username, sha1(credentials.password))
      .then(user => {
        if (user) {
          return tokenService.generateToken(mapper.toDto(user))
        }
        return Promise.reject({ type: INVALID_CREDENTIALS });
      });
  }
  save(model, id) {
   /* return Promise.resolve(new Dto({ ...rawDto, id }))
     .then(dto => mapper.toModel(dto))
     .then(model => {*/
        if (id) {
          return repository.update(mapper.toDto(model));
        } else {
          return repository.create(mapper.toDto(model));
        }
   //  })
     // .then(model => mapper.toDto(model));
  }
  findAll() {
    return repository.findAll()
  }

  getById(id) {
    return repository.getById(id)
  }
  remove(id) {
    return repository.remove(id)
      .then(() => undefined);
  }
  
}

const authService = new AuthService();

module.exports = authService;
