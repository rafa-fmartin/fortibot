// Modules
const fs = require("node:fs");
const path = require("node:path");

const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

require("dotenv").config();

// Load commands from files
const commands = [];
const commands_path = path.join(__dirname, "commands");
const command_script_files = fs.readdirSync(commands_path).filter(file => file.endsWith(".js"));

for (const file of command_script_files) {
    const file_path = path.join(commands_path, file);
    const command = require(file_path);
    commands.push(command.data.toJSON());
}