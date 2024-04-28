const rotateMatrix = require('../1-rotate-matrix').rotateMatrix;

const displayMatrix = function (matrix) {
    for (let i = 0; i < matrix.length; ++i) {
        console.log(matrix[i]);
    }
};

test('Rotate Matrix 4 X 4', () => {
    const t1 = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    const r1 = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4]
    ];
    rotateMatrix(t1);
    expect(t1).toEqual(r1);
});
