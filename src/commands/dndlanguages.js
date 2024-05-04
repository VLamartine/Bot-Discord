const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Language = require('../models/languages');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dndlanguages')
        .setDescription('Listar os idiomas de DnD'),
    async execute(interaction) {
        const languages = await Language.findAll();
        const message = new EmbedBuilder()
            .setTitle('Idiomas DnD')
            .setDescription('Os idiomas e quem é capaz de falá-los')

        await interaction.reply(`Aaaaaa`);
    },
};