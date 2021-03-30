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
  email: {
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
      this.firstname = obj.firstname;
      this.lastname = obj.lastname;
      this.email = obj.email;
      this.message = obj.message;
    }
  }
}
MessageModel.init(attributes, options);

module.exports = MessageModel;
