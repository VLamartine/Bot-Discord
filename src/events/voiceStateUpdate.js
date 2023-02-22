const { Events, ChannelType } = require('discord.js');
const MutedUser = require('../models/mutedUser');

module.exports = {
    name: Events.VoiceStateUpdate,
    async execute(_oldState, newState) {
        const server = newState.guild;
        const client = newState.client;
        const mutedUser = await MutedUser.findOne({
            where: {
                serverId: server.id,
                discordId: newState.id
            }
        })

        if (!mutedUser) {
            return;
        }

        if (newState.serverMute) {
            return;
        }

        const user = await server.members.fetch(newState.id);

        try {
            user.voice.setMute(true);
        } catch (err) {
            const textChannel = client.channels.cache.find(c => c.type === ChannelType.GuildText && c.guild.id === server.id);
            textChannel.send('Erro ao atualizar o voicestate')
        }
    }
}