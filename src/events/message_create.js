const { CommandInteractionOptionResolver } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const emitter = require("../talk_to_bot_event_emitter.js");

// Load bot message interactions
const response_files_path = path.join(__dirname, "../", "bot_responses");
const response_files = fs.readdirSync(response_files_path).filter(file => file.endsWith(".js"));

const interaction_triggers = new Array();

for (const file of response_files) {
    const file_path = path.join(response_files_path, file);
    const trigger = require(file_path);
    interaction_triggers.push(trigger);
}

module.exports = {
    name: "messageCreate",

    execute(message) {
        for (const trigger of interaction_triggers) {
            emitter.emit(trigger.triggers_with(message.content), message);
        }
    }
}