const jwt = require('jsonwebtoken');
const repository = require('./users-message.repository');

const { INVALID_CREDENTIALS } = require('../common/error/error-type');


class MessageService {

  save(model) {  
    return repository.create(model);
  }

  
}

const messageService = new MessageService();

module.exports = messageService;
