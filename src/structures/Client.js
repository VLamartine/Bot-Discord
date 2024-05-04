const { Client, Collection, GatewayIntentBits } = require('discord.js');
const constants = require('../consts/contants');
const fs = require('node:fs');
const path = require('node:path');

class ExtendedClient extends Client {

    commands = new Collection();

    constructor() {
        super({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
        this.registerCommands();
        this.registerEvents();
    }

    registerCommands() {
        const commandFiles = fs.readdirSync(constants.COMMANDS_FOLDER).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(constants.COMMANDS_FOLDER, file);
            const command = require(filePath);
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ('data' in command && 'execute' in command) {
                this.commands.set(command.data.name, command);
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }

    registerEvents() {
        const eventFiles = fs.readdirSync(constants.EVENTS_FOLDER).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(constants.EVENTS_FOLDER, file);
            const event = require(filePath);
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args));
            } else {
                this.on(event.name, (...args) => event.execute(...args));
            }
        }
    }

    setActivity() {
        console.log(this.user);
    }
}

module.exports = ExtendedClient;