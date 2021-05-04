const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  channelName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nbMessages: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usersId: {
    type: DataTypes.STRING,
    allowNull: true
  }
};

const options = {
  sequelize,
  modelName: 'channel'
};

class MessageModel extends Model {
  constructor(obj) {
    super();
    if (obj) {
      this.id = obj.id;
      this.channelName = obj.channelName;
      this.nbMessages = obj.nbMessages;
      this.creationDate = obj.creationDate;
      this.statut = obj.statut;
      this.usersId=obj.usersId;
    }
  }
}
MessageModel.init(attributes, options);

module.exports = MessageModel;
