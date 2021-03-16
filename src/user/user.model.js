const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

const options = {
  sequelize,
  modelName: 'user'
};

class UserModel extends Model {
}
UserModel.init(attributes, options);

module.exports = UserModel;
