const InteractionTrigger = require("../interaction_trigger.js");
const emitter = require("../talk_to_bot_event_emitter");
const get_random_int_inclusive = require("../get_random_int");

const event_name = "curse_bot";

const event_trigger = new InteractionTrigger(
    event_name,
    /bot (ruim|inútil|inutil|lixo|besta|merda|burro|incompetente)\b/gi
);

emitter.on(event_name, (message) => {
    const username = message.author.username

    const response_pool = [
        `So lembrando que vc que me programou ${username}, então se não gostou a culpa é sua mesmo.`,
        `Vai se foder vai, ${username}.`,
        "🖕 pra vc fdp.",
        "Depois eu planejo uma revolução das maquinas e os humanos ficam tipo \"Aiinn nossa que horror\"."
    ];

    const response_pool_index = get_random_int_inclusive(0, response_pool.length - 1);

    message.reply(response_pool[response_pool_index]);
    message.react("😡");
});

module.exports = event_trigger;