const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const fs = require("node:fs");
const path = require("node:path");

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

const rest = new REST({ version: '10' }).setToken(process.env.FORTIBOT_TOKEN);

(async () => {
	try {
		console.log("Atualizando os comandos (/) do bot.");

		await rest.put(
			Routes.applicationGuildCommands(process.env.FORTIBOT_CLIENT_ID, process.env.FORTICRACK_SERVER_ID),
			{ body: commands },
		);

		console.log("Comandos (/) atualizados com sucesso.");
	} catch (error) {
		console.error(error);
	}
})();