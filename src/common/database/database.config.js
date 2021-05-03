const Sequelize = require('sequelize');

const sequelize = new Sequelize('messagewall', 'root', 'Lou974Lou!', {
  host: 'localhost',
  dialect: 'mysql'
});
/*
const sequelize = new Sequelize('ynov_final', 'ynov', 'oT4mI6fZ0bdX5d', {
  host: 'localhost',
  dialect: 'mysql'
});*/


sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Database error:', err));
sequelize.sync();

module.exports = sequelize;
