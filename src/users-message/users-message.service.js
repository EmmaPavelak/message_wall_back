const repository = require('./users-message.repository');
const mapper = require('./users-message.mapper');

class MessageService {

  save(model,id) {  
    if (id) {
      return repository.update(mapper.toDto(model));
    } else {
      return repository.create(mapper.toDto(model));
    }
  }
  findAll() {
    return repository.findAll()
  }

  getById(id) {
    return repository.getById(id)
  }
  getByUser(user) {
    return repository.getByUser(user)
  }
  remove(id) {
    return repository.remove(id)
      .then(() => undefined);
  }
  
}

const messageService = new MessageService();

module.exports = messageService;
