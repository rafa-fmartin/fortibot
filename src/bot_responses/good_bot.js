const InteractionTrigger = require("../interaction_trigger.js");
const emitter = require("../talk_to_bot_event_emitter");
const get_random_int_inclusive = require("../get_random_int");

const event_name = "good_bot";

const event_trigger = new InteractionTrigger(
    event_name,
    /^good bot$/gi
);

emitter.on(event_name, (message) => {
    const username = message.author.username

    const response_pool = [
        `Good human ${username}`,
        `Enfia essa aprovação no seu cu ${username}.`,
        `Muito obrigado, ${username}, mas acabei de fazer uma busca na minha memória aqui pra ver quem pediu sua opinião e o resultado foi nulo 🤔`,
        "Espera só vc ler meu código todinho pra ver oque que é bom de vdd 🥵"
    ];

    const response_pool_index = get_random_int_inclusive(0, response_pool.length - 1);

    message.reply(response_pool[response_pool_index]);

    if (response_pool_index == 3) {
        message.react("🍑");
    }
});

module.exports = event_trigger;