const Sequelize = require('sequelize');
const config = require('./util/config');

const sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
    dialect: 'mysql',
    host: config.db.url,
    logging: console.log,
});

module.exports = sequelize;