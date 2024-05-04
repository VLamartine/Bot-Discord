const path = require('node:path');

module.exports = Object.freeze({
    COMMANDS_FOLDER: path.join(__dirname, '../commands'),
    EVENTS_FOLDER: path.join(__dirname, '../events')
})