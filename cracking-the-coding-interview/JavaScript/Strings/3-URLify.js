/*
Function to replace spaces in a string with '%20'
Input: String
Output: New string with spaces replaced as '%20'
*/

const replaceSpaces = function (str) {
    let spaceCount = 0;
    for (let x = 0; x < str.length; ++x) {
        if (str[x] == ' ') {
            spaceCount++;
        }
    }
    let index = str.length + (spaceCount * 2);
    let charArray = new Array(index);

    for (let i = str.length - 1; i >= 0; --i) {
        if (str[i] == ' ') {
            charArray[index] = '0';
            charArray[index - 1] = '2';
            charArray[index - 2] = '%'
            index -= 3;
        } else {
            charArray[index] = str[i];
            index--;
        }
    }
    return charArray.join('');
}

module.exports.replaceSpaces = replaceSpaces;