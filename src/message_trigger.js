class MessageTrigger {
    constructor(regex, reaction, react_emoji = null) {
        this.regex = regex;
        this.reaction = reaction;
        this.react_emoji = react_emoji;
    }
};

module.exports = MessageTrigger;