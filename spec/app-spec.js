const app = require('../main/app');
const random = require('../main/models/random');
const judge = require('../main/models/judgeCorrect');
const Guess = require('../main/models/Guess');

describe('guess-number', ()=> {
    const randomNumbers = random.getRandom();
    const answers = randomNumbers.join('');

    it('should print correct XAXB',() => {
        spyOn(random,'getRandom').and.returnValue('1234');
        const result = Guess.guess('1234');
        expect(result).toEqual('4A0B')

    });

    describe('unit test', ()=> {
        it('should get random', ()=> {

            const isUnique = (item, index, array) => {
                return array.lastIndexOf(item) === index;
            };
            expect(randomNumbers.length).toEqual(4);
            expect(randomNumbers.every(isUnique)).toBeTruthy();
            expect(random.getRandom()).not.toEqual(randomNumbers);
        });
        it('is correct number', ()=> {
            const correctString = judge.IsCorrect('1234', '3204');
            const expextString = '2A1B';
            expect(correctString).toEqual(expextString);
        });
    });
});