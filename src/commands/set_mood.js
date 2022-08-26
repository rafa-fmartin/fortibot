const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("set_mood")
        .setDescription("Ajusta o mood do bot.")
        .addStringOption(option =>
            option.setName("mood_string")
                .setDescription("String representando o humor do bot")
                .setRequired(true)
                .addChoices(
                    { name: "Tarado", value: "tarado"},
                    { name: "Agressivo", value: "agressivo"}
                )
        ),
    
    async execute(interaction) {
        await interaction.reply(`Ok, a partir de agora serei mais ${interaction.options.getString("mood_string")}`)
    }
};
