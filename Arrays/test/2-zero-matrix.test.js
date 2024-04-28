const setZero = require('../2-zero-matrix').setZero;

test('Rotate Matrix 4 X 4', () => {
    const t1 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 0, 11, 12],
        [13, 14, 15, 16]
    ];
    const r1 = [
        [1, 0, 3, 4],
        [5, 0, 7, 8],
        [0, 0, 0, 0],
        [13, 0, 15, 16]
    ];
    setZero(t1);
    expect(t1).toEqual(r1);
});

//ToDo - Add negative tests and tests for supporting units