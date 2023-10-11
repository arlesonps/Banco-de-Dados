const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_crud', 'root', '123', {
	dialect: 'mysql',
	host: 'localhost',
	port: 3306
});

module.exports = sequelize;