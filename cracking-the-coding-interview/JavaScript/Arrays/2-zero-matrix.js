const nullifyRow = function (matrix, row) {
    for (let j = 0; j < matrix[0].length; ++j) {
        matrix[row][j] = 0;
    }
};

const nullifyColumn = function (matrix, column) {
    for (let i = 0; i < matrix.length; ++i) {
        matrix[i][column] = 0;
    }
};
/*
Function to set the entire row and column of an M X N matrix to 0 if an element is 0
Input: M X N Matrix (2D Array)
Output: Modified Matrix
*/
const setZero = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length
    const row = new Array(m).fill(false);
    const column = new Array(n).fill(false);

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] == 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }

    //Nullify rows
    for (let x = 0; x < row.length; ++x) {
        if (row[x]) {
            nullifyRow(matrix, x);
        }
    }
    //Nullify columns
    for (let y = 0; y < column.length; ++y) {
        if (column[y]) {
            nullifyColumn(matrix, y);
        }
    }
};

module.exports.setZero = setZero;
