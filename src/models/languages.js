const Sequelize = require('sequelize');
const sequelize = require('../database');

const Language = sequelize.define('language', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'language'
    },
    spokenBy: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'spoken_by'
    }
}, {
    underscored: true
})

module.exports = Language;