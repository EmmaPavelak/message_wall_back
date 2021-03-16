const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
};

const options = {
  sequelize,
  modelName: 'character'
};

class CharacterModel extends Model {
  constructor(obj) {
    super();
    if (obj) {
      this.id = obj.id;
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.birthDate = obj.birthDate?.toDate?.() || obj.birthDate && new Date(obj.birthDate);
    }
  }
}
CharacterModel.init(attributes, options);

module.exports = CharacterModel;
