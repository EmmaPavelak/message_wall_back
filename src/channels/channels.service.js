const repository = require('./channels.repository');
const mapper = require('./channels.mapper');

class ChannelService {

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

const channelService = new ChannelService();

module.exports = channelService;
