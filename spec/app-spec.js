const main = require('../main/app');

describe('run',()=>{
    it('can work',()=>{
        const correctString = main.IsCorrect('1234','3204');
        const expextString = '2A1B';
        expect(correctString).toEqual(expextString);
    });
});