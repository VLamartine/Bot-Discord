const config = require('./util/config');
const sequelize = require('./database');
const MutedUser = require('./models/mutedUser');
const User = require('./models/user')

const Client = require('./structures/Client');

const client = new Client();

sequelize.sync({ force: false });
client.login(config.token);