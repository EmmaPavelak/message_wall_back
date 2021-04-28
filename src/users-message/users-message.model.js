const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

const options = {
  sequelize,
  modelName: 'usersmessage'
};

class MessageModel extends Model {
  constructor(obj) {
    super();
    if (obj) {
      this.id = obj.id;
      this.username = obj.username;
      this.message = obj.message;
    }
  }
}
MessageModel.init(attributes, options);

module.exports = MessageModel;
