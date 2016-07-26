function IsCorrect(answers,inputs) {
    let a = 0;
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
        if (exist){
            b ++;
        }
    });
    return `${a}A${b}B`;
}

exports.IsCorrect = IsCorrect;