const Sequelize = require('sequelize');
const sequelize = require('../database');

const MutedUser = sequelize.define('muted_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    serverId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    discordId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    discordName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mutedBy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mutedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
    underscored: true
})

module.exports = MutedUser;