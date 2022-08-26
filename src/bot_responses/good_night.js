const InteractionTrigger = require("../interaction_trigger.js");
const emitter = require("../talk_to_bot_event_emitter");
const get_random_int_inclusive = require("../get_random_int");

const event_name = "good_night";

const event_trigger = new InteractionTrigger(
    event_name,
    /\bboa noite\b/gi
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
        "Boa noite, amore",
	`Tomara que você tenha insônia, ${username}`,
        "Ninguém liga.",
        "Vai dormir ou vai fuder? 😏🥵🥵🥵😏"
    ];

    const response_pool_index = get_random_int_inclusive(0, response_pool.length - 1);

    message.reply(response_pool[response_pool_index]);
});

module.exports = event_trigger;
