const dotenv = require('dotenv');
dotenv.config();

const envNames = {
    TOKEN: 'TOKEN',
    APP_ID: 'APP_ID',
    SERVER_ID: 'SERVER_ID',
    DB_URL: 'DB_URL',
    DB_USERNAME: 'DB_USERNAME',
    DB_PASSWORD: 'DB_PASSWORD',
    DB_NAME: 'DB_NAME',
}

const envConfig = {
    token: process.env[envNames.TOKEN],
    appId: process.env[envNames.APP_ID],
    serverId: process.env[envNames.SERVER_ID],
    db: {
        url: process.env[envNames.DB_URL],
        username: process.env[envNames.DB_USERNAME],
        password: process.env[envNames.DB_PASSWORD],
        name: process.env[envNames.DB_NAME]
    }
}

module.exports = envConfig;