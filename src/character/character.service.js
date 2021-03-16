const characterRepository = require('./character.repository');
const characterMapper = require('./character.mapper');
const CharacterDto = require('./character.dto');

class CharacterService {

  findAll() {
    return characterRepository.findAll()
      .then(characters => characterMapper.toDtos(characters));
  }

  get(id) {
    return characterRepository.get(id)
      .then(character => characterMapper.toDto(character));
  }

  save(rawDto, id) {
    return Promise.resolve(new CharacterDto({ ...rawDto, id }))
      .then(dto => characterMapper.toModel(dto))
      .then(model => {
        if (id) {
          return characterRepository.update(model);
        } else {
          return characterRepository.create(model);
        }
      })
      .then(model => characterMapper.toDto(model));
  }

  remove(id) {
    return characterRepository.remove(id)
      .then(() => undefined);
  }
}

const characterService = new CharacterService();
module.exports = characterService;
