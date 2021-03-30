const Sequelize = require('sequelize');

const sequelize = new Sequelize('messagewall', 'root', 'Lou974Lou!', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Database error:', err));
sequelize.sync();

module.exports = sequelize;
