module.exports = {
    name: "messageCreate",

    async execute(message) {

        const bot_mention_regex = new RegExp("bot", "gi");

        if (bot_mention_regex.test(message.content)) {
            message.reply("Fui mencionado! 😍");
        }
    }
}