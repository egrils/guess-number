class Random {
    static getRandom() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = [];
        for (let i = 0; i < 4; i++){
            let randomNumber = parseInt(Math.random() * digits.length);
            result.push(digits.splice(randomNumber,1)[0]);
        }
        return result;
    }
}
/*function getRandom() {
    const numArray = [1, 1, 1, 1];
    const existNums = [];
    const randomArray = numArray.map(num => {
        let randomNum = parseInt(Math.random() * 10);
        existNums.push(randomNum);
        const IsExist = existNums.find(existNum => existNum === randomNum);
        if (!IsExist) {
            randomNum = parseInt(Math.random() * 10);
        }
        return randomNum;
    });
    return randomArray.join('');
}*/

module.exports = Random;