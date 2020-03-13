describe('makeCounter',() => {
    it('makeCounter defined', () => {
        assert.isDefined(makecounter);
    });

    it('makeCounter works correctly',() => {
        let counter = makecounter();
        const count = 0;
        const expected = 0;

        const actual = counter();

        assert.deepEqual(actual, expected);
    });
})

describe('getFactorial', () => {
    it('getFactorial defined', () => {
        assert.isDefined(getFactorial);
    });

    it('getFactorial works correctly when result \'Wrong input!\', number = null',() => {
        const number = null;
        const expected = "Wrong input!";

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result \'Wrong input!\', number = undefined',() => {
        const number = undefined;
        const expected = "Wrong input!";

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result \'Wrong input!\', number = -8',() => {
        const number = -8;
        const expected = "Wrong input!";

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result \'Wrong input!\', number = false',() => {
        const number = false;
        const expected = "Wrong input!";

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result 120, number = 5',() => {
        const number = 5;
        const expected = 120;

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result 24, number = 4',() => {
        const number = 4;
        const expected = 24;

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result 1, number = 1',() => {
        const number = 1;
        const expected = 1;

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result 1, number = 0',() => {
        const number = 0;
        const expected = 1;

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });

    it('getFactorial works correctly when result 6,227,020,800, number = 13',() => {
        const number = 13;
        const expected = 6227020800;

        const actual = getFactorial(number);

        assert.deepEqual(actual, expected);
    });
})