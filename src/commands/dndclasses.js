const { SlashCommandBuilder } = require('discord.js');
const MutedUser = require('../models/mutedUser');
const User = require('../models/user');
const discordErrors = require('../consts/discordErrors');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dndclasses')
        .setDescription('Get a list of DnD classes'),
    async execute(interaction) {
        // const user = interaction.user;
        // const server = interaction.guild;
        // const mutedUserOption = interaction.options.getUser('user')

        // if (user.id === mutedUserOption.id) {
        //     await interaction.reply('Você está realmente tentando se desmutar?');
        //     return
        // }

        // const mutedUser = await MutedUser.findOne({
        //     where: {
        //         discordId: mutedUserOption.id,
        //         serverId: server.id
        //     }
        // });

        // if (!mutedUser) {
        //     await interaction.reply('Esse usuário ainda detem os direitos de falar');
        //     return;
        // }


        // try {
        //     mutedUser.destroy();
        //     const member = await server.members.fetch(mutedUser.discordId);
        //     await member.voice.setMute(false);
        // } catch (e) {
        //     await interaction.reply(discordErrors[e.name]);
        //     return;
        // }



        // await interaction.reply(`Que ${mutedUser.discordName} aprenda a ficar quieto`);
    },
};