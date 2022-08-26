const InteractionTrigger = require("../interaction_trigger.js");
const emitter = require("../talk_to_bot_event_emitter");
const get_random_int_inclusive = require("../get_random_int");

const event_name = "say_hi_to_bot";

const event_trigger = new InteractionTrigger(
    event_name,
    /\b(oi|eai|e ai|e aí|beleza|cad[eê] o)\s+(bot)\b/gi
);

emitter.on(event_name, (message) => {
    /* Fixes https://github.com/rafa-fmartin/fortibot/issues/4
     * Note: Needs to be defined in every reaction instead of event_create.js
     * otherwise the bot will ignore 50% of interaction event emissions (WTF?)
     */
    if(message.author.id === message.client.user.id) {
        return;
    }
    
    const username = message.author.username

    const response_pool = [
        `Mais respeito por favor. Olá ${username}.`,
        `Oi é o caralho ${username}`,
        `Oi ${username}, seu pedaço de mal caminho 🔥🔥🍑🍑🥵🥵😏😏`
    ];

    const response_pool_index = get_random_int_inclusive(0, response_pool.length - 1);

    message.reply(response_pool[response_pool_index]);

    if (response_pool_index == 2) {
        message.react("🍑");
    }
});

module.exports = event_trigger;