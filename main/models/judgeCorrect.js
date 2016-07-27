class judgeCorrect {
    static IsCorrect(answer, input) {
        const inputs = Array.from(input);
        const answers = Array.from(answer);

        const countB = inputs.map((input, index) => answers[index] != input && answers.some(ran => ran === input ? 1 : 0))
            .reduce((pre, next) => pre + next);
        const countA = inputs.map((input, index) => answers[index] === input && answers.some(ran => ran === input ? 1 : 0))
            .reduce((pre, next) => pre + next);

        return `${countA}A${countB}B`;

/*        let a = 0;
        let b = 0;
        let index = 0;
        const failAnswers = [];
        const failNumbers = [];
        const answersArray = answers.split('');
        answersArray.forEach((answer)=> {
            let num = inputs.slice(index, index + 1);
            if (num === answer) {
                a++;
            } else {
                failAnswers.push(answer);
                failNumbers.push(num);
            }
            index++;
        });
        failNumbers.forEach((num)=> {
            const exist = failAnswers.find(answer => num === answer);
            if (exist) {
                b++;
            }
        });
        return `${a}A${b}B`;*/
    }
}

module.exports = judgeCorrect;