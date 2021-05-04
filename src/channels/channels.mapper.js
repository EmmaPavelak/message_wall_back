const model = require('./channels.model');

const toDto = model => ({
  id: model.id,
  channelName : model.channelName,
  nbMessages : model.nbMessages,
  creationDate : model.creationDate,
  statut:model.statut,
  usersId:model.usersId
});

const toModel = dto => new model(dto);


module.exports = {
  toDto,
  toModel
};
