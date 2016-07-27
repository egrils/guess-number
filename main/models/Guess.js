const judge = require('./judgeCorrect');
const random = require('./random');

class Guess {

    static guess(input) {
        const answer = random.getRandom();
        const compareNumber = judge.IsCorrect(answer,input);
        return compareNumber;
    }
}
module.exports = Guess;