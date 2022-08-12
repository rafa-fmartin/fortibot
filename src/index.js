
// Modules
const fs = require("node:fs");
const path = require("node:path");

const { Client, Collection, IntentsBitField } = require("discord.js");

require("dotenv").config();

/**
 * Bot client intents. See
 * 1) https://discordjs.guide/popular-topics/intents.html#enabling-intents
 * 2) https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
bot_intents = new IntentsBitField();
bot_intents.add(
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildEmojisAndStickers,
    IntentsBitField.Flags.GuildIntegrations, // TODO: What are integrations?
    IntentsBitField.Flags.GuildWebhooks,     // TODO: What are webhooks?
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.MessageContent
);

// The bot client
const bot_client = new Client({ intents: bot_intents });

bot_client.commands = new Collection();


// Load bot commnads
const commands_path = path.join(__dirname, "commands");
const command_script_files = fs.readdirSync(commands_path).filter(file => file.endsWith(".js"));

for (const file of command_script_files) {
    const file_path = path.join(commands_path, file);
    const command = require(file_path);
    bot_client.commands.set(command.data.name, command);
}

// Load bot event reactions
const events_path = path.join(__dirname, "events");
const event_script_files = fs.readdirSync(events_path).filter(file => file.endsWith(".js"));

for (const file of event_script_files) {
    const file_path = path.join(events_path, file);
    const event = require(file_path);

    if (event.once) {
        bot_client.once(event.name, (...args) => event.execute(...args));
    } else {
        bot_client.on(event.name, (...args) => event.execute(...args));
    }
}

// Log the bot in
bot_client.login(process.env.FORTIBOT_TOKEN);