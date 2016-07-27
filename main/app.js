const random = require('./models/random');
const judgeCorrect = require('./models/judgeCorrect');
const duplicate = require('./models/isrepetition');

class guessRandom {
    static guess(inputs) {
        console.log('Welcome!\n\n');
        for (let i = 6; i > 0; i--) {
            console.log(`Please input your number(${i}):`);

            const repetition = duplicate.duplication(inputs);

            if (repetition) {
                console.log('\n\nCannot input duplicate numbers!');
            } else {
                const answers = random.getRandom().join('');
                const udgeString = judgeCorrect.IsCorrect(answers, inputs);
                if (judgeString === '4A0B') {
                    return `Congratulations!`;
                } else {
                    console.log(judgeCorrect.IsCorrect(answers, inputs));
                    if (i = 1) {
                        return `Game Over`;
                    }
                }
            }

        }
    }
}

module.exports = guessRandom;