const MessageTrigger = require("../message_trigger.js");

const message_triggers = [
    new MessageTrigger(
        /\b(oi|eai|beleza|cad[eê] o)\s+(bot)\b/gi,
        (message) => { return `Mais respeito por favor. Olá ${message.author.username}` }
    ),

    new MessageTrigger(
        /\b(deixa|deixar|deixem) (o bot em paz)\b/gi,
        (message) => { return `${message.author.username} é a menor porcaria dese grupo de losers.` },
        "❤️"
    ),

    new MessageTrigger(
        /^good bot$/gi,
        (message) => { return `Enfia sua aprovação no seu cu ${message.author.username}` }
    )
];

module.exports = {
    name: "messageCreate",

    execute(message) {
        for (const trigger of message_triggers) {
            if (trigger.regex.test(message.content)) {
                message.reply(trigger.reaction(message));

                if (trigger.react_emoji != null) {
                    message.react(trigger.react_emoji)
                }
            }
        }
    }
}