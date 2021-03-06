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
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  sendDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  idChannel: {
    type: DataTypes.INTEGER,
    allowNull: true
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
      this.idUser = obj.idUser;
      this.sendDate = obj.sendDate;
      this.idChannel = obj.idChannel;
    }
  }
}
MessageModel.init(attributes, options);

module.exports = MessageModel;
