const moment = require('moment');

module.exports = class CharacterDto {
  constructor(obj) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.birthDate = obj.birthDate && moment(obj.birthDate);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  introduce() {
    console.log(`My name is ${this.getFullName()} and I was born in ${this.birthDate.format('mm/MM/yyyy')}`);
  }
}
