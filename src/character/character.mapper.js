const CharacterDto = require('./character.dto');
const CharacterModel = require('./character.model');

const toDtos = models => models
  .filter(model => !!model)
  .map(toDto);

const toDto = model => model && new CharacterDto(model);

const toModels = dtos => dtos
  .filter(dto => !!dto)
  .map(toModel);

const toModel = dto => dto && new CharacterModel(dto);

module.exports = {
  toDtos,
  toDto,
  toModels,
  toModel
}
