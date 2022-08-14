/**
 * Holds a string or regex pattern that should trigger a reaction in the bot
 */
class InteractionTrigger {

    /**
     * Constructs a InteractionTrigger object
     * 
     * @param {String} type The event type to be triggered.
     * @param {String, RegExp} event_pattern The pattern to recognise the event.
     */
    constructor(event_name, event_pattern) {
        this.event_name = event_name;
        this.event_pattern = event_pattern;
    }

    /**
     * 
     * @param {String} message_content The message content to analyze for patterns
     */
    triggers_with(message_content) {
        if (this.event_pattern instanceof RegExp && this.event_pattern.test(message_content)) {
            return this.event_name;
        }
        else if (this.event_pattern instanceof String && this.event_pattern.localeCompare(message_content)) {
            return this.event_name;
        }
        else {
            return null;
        }
    }
};

module.exports = InteractionTrigger;