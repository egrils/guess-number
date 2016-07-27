class IsRepetition {
    static duplication(inputs) {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };
        return inputs.split('').every(isUnique);
    }
}

module.exports = IsRepetition;