const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reload')
        .setDescription('Recarrega um comando')
        .addStringOption(option =>
            option.setName('command').setDescription('O comando a ser recarregado').setRequired(true)
        ),
    async execute(interaction) {
        const commandName = interaction.options.getString('command', true).toLowerCase();
        const command = interaction.client.commands.get(commandName);

        if (!command) {
            return interaction.reply(`Não existe o comando \`${commandName}\``);
        }
        delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try {
            interaction.client.commands.delete(command.data.name);
            const newCommand = require(`./${command.data.name}.js`);
            interaction.client.commands.set(newCommand.data.name, newCommand);
            await interaction.reply(`O comando \`${newCommand.data.name}\` foi recarregado!`);
        } catch (error) {
            console.error(error);
            await interaction.reply(`Houve um erro ao recarregar os comandos \`${command.data.name}\`:\n\`${error.message}\``);
        }
    }
}