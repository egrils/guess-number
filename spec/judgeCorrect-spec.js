const judge = require('../main/models/judgeCorrect');

describe('guess-number', ()=> {
    it('is correct number', ()=> {
        const correctString = judge.IsCorrect('1234', '3204');
        const expextString = '2A1B';
        expect(correctString).toEqual(expextString);
    });
    it('is correct number', ()=> {
        const correctString = judge.IsCorrect('1234', '4321');
        const expextString = '0A4B';
        expect(correctString).toEqual(expextString);
    });
    it('is correct number', ()=> {
        const correctString = judge.IsCorrect('1234', '5678');
        const expextString = '0A0B';
        expect(correctString).toEqual(expextString);
    });
    it('is correct number', ()=> {
        const correctString = judge.IsCorrect('1234', '1234');
        const expextString = '4A0B';
        expect(correctString).toEqual(expextString);
    });
});