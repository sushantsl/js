/*
Function to determine if string has all unique characters
Input: String
Output: Boolean (true if all characters are unique, false if duplicates exist)
Assumption: ASCII string with max 128 chars in alphabet
*/
const hasUniqueChars = function (str) {
    if (str.length > 128) {
        //Can't be unique as chars in alphabet are only 128
        return false;
    }
    const char_set = new Array(128).fill(false);
    for (let i = 0; i < str.length; ++i) {
        let val = str.charCodeAt(i);
        if (char_set[val]) {
            //Character was already found in the set
            return false;
        }
        char_set[val] = true;
    }

    //Reached end of string and duplicate was not found
    return true;
};

module.exports.hasUniqueChars = hasUniqueChars;

