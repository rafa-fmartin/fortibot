const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName("stalk_server").setDescription("Responde com informações do servidor."),
    async execute(interaction) {
        await interaction.reply(`Nome: ${interaction.guild.name}\nMembros: ${interaction.guild.memberCount}`);
    },
};
