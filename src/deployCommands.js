const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();

const { TOKEN, APP_ID, SERVER_ID } = process.env;

const commands = [];

const commandsFolder = path.join(__dirname, './commands');
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync(commandsFolder).filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
    const command = require(`${commandsFolder}/${file}`);
    commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(TOKEN);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(APP_ID, SERVER_ID),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();