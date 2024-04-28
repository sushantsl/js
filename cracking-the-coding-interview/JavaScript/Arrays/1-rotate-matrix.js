/*
Function to rotate an N X N matrix (2D Array) by 90 degrees to the right
Top -> Right
Right -> Bottom
Bottom -> Left
Left -> Top
Input: 2D Array which should be a square matrix
Output: Modifies the array passed to it as arrays are passed by reference
*/
const rotateMatrix = function (matrix) {
    console.log(`Rows - ${matrix.length}`);
    console.log(`Colums - ${matrix[0].length}`);
    if (matrix.length != 0 && matrix.length == matrix[0].length) {
        let n = matrix.length;
        for (let layer = 0; layer < n / 2; ++layer) {
            let first = layer;
            let last = n - 1 - layer;
            for (let i = first; i < last; ++i) {
                let offset = i - first;
                let top = matrix[first][i]; //save Top

                //Left -> Top
                matrix[first][i] = matrix[last - offset][first];

                //Bottom -> Left
                matrix[last - offset][first] = matrix[last][last - offset];

                //Right -> Bottom
                matrix[last][last - offset] = matrix[i][last];

                //Top -> Right
                matrix[i][last] = top;
            }
        }
    }
}

module.exports.rotateMatrix = rotateMatrix;
