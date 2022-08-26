const InteractionTrigger = require("../interaction_trigger.js");
const emitter = require("../talk_to_bot_event_emitter");
const get_random_int_inclusive = require("../get_random_int");

const event_name = "invite_to_play";

const event_trigger = new InteractionTrigger(
    event_name,
    /\b((vamo)s?|querem|bora) (joga)r?\b(\??)/gi
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
        `Que jogar oq, ${username} e o trabalho?? @everyone olha a vagabundagem aqui.`,
        `@everyone a porra ociosa que responde por ${username} quer matar criança e 40tão`,
        `@everyone olha só, turma, ${username} quer ver a bunda virtual das mina KKK.`,
        "@everyone BORA JOGAR MEUS TIJOLINHO 🚧🧱🧱🚧"
    ];

    const response_pool_index = get_random_int_inclusive(0, response_pool.length - 1);

    message.reply(response_pool[response_pool_index]);
});

module.exports = event_trigger;