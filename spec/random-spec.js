const random = require('../main/models/random');

describe('randomNumber', ()=> {
    it('should get random', ()=> {

        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };
        const randomNumber = random.getRandom();
        expect(randomNumber.length).toEqual(4);
        expect(randomNumber.every(isUnique)).toBeTruthy();
        expect(random.getRandom()).not.toEqual(randomNumber);
    });
});