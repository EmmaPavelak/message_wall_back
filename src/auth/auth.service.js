const jwt = require('jsonwebtoken');
const repository = require('../user/user.repository');
const mapper = require('./auth.mapper');
const tokenService = require('../common/token.service');
const { INVALID_CREDENTIALS } = require('../common/error/error-type');


class AuthService {
  login(credentials) {
    return repository.findByCredentials(credentials.username, credentials.password)
      .then(user => {
        if (user) {
          return tokenService.generateToken(mapper.toDto(user))
        }
        return Promise.reject({ type: INVALID_CREDENTIALS });
      });
  }
  save(model, id) {
   // return Promise.resolve(new toDto({ ...rawDto, id }))
     // .then(dto => mapper.toModel(dto))
     
        if (id) {
          return repository.update(model);
        } else {
          return repository.create(model);
        }
      
     // .then(model => mapper.toDto(model));
  }

  
}

const authService = new AuthService();

module.exports = authService;
