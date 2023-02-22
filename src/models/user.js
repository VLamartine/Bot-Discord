const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    serverId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'server_id'
    },
    discordId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'discord_id'
    },
    discordName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'discord_name',
    },
}, {
    underscored: true
})

module.exports = User;