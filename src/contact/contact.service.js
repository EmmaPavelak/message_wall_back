const jwt = require('jsonwebtoken');
const repository = require('./contact.repository');

const { INVALID_CREDENTIALS } = require('../common/error/error-type');


class ContactService {

  save(model) {  
    return repository.create(model);
  }

  
}

const contactService = new ContactService();

module.exports = contactService;
