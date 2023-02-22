const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
const MutedUser = require('../models/mutedUser');
const User = require('../models/user');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mute somebody!')
        .addUserOption(option => option.setName('user').setDescription('Usuário a ser mutado').setRequired(true)),
    async execute(interaction) {

        const user = interaction.user;
        const server = interaction.guild;
        const mutedUser = interaction.options.getUser('user')

        const avoidMute = await User.findOne({
            where: {
                discordId: mutedUser.id,
                serverId: server.id
            }
        });

        if (avoidMute) {
            await interaction.reply(`Nesse servidor, ${avoidMute.discordName} não pode ser silenciado(a)`);
            return;
        }
        const [mutedUserInstance, created] = await MutedUser.findOrCreate({
            where: {
                discordId: mutedUser.id,
                serverId: server.id
            },
            defaults: {
                discordName: mutedUser.username,
                mutedBy: user.username
            }
        })

        if (!created) {
            await interaction.reply(`${mutedUser.username} já está silenciado(a)`)
            return
        }

        const member = await server.members.fetch(mutedUser.id);
        member.voice.setMute(true);

        await interaction.reply(`Agora, ${mutedUserInstance.discordName} nos dará paz e tranquilidade`);
    },
};