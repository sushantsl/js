/*
Function to map each character to a number. 
Example - a->0 , b->1, c->2, etc. This is case insensitive
Non-letters characters map to -1. 
Input: One character
Output: Integer
*/
const getCharNumber = function (char) {
    let a = 'a'.charCodeAt(0);
    let z = 'z'.charCodeAt(0);
    let c = char.charCodeAt(0);
    if (a <= c && c <= z) {
        return c - a;
    }
    return -1;
};

/*
Function to build a frequency table of characters in a given string
Input: String
Output: Array (Index- Chacter Number, Value- No. of occurences in string)
*/
const buildFrequencyTable = function (str) {
    const capacity = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const table = new Array(capacity).fill(0);
    const charArray = str.split('');
    charArray.forEach((char) => {
        let i = getCharNumber(char);
        if (i != -1) {
            table[i]++;
        }
    });
    return table;
};

/*
Function to check if a given frequency table of characters has 
a maximum of one character with an odd count.
Input: Frequency Table Of Characters (Array)
Output: Boolean (true if characters have even counts or max one has odd count, 
    false if more than one count is odd)
*/
const checkMaxOneOdd = function (table) {
    let foundOdd = false;
    for (let i = 0; i < table.length; ++i) {
        let count = table[i];
        if (count % 2 == 1) {
            if (foundOdd) {
                return false;
            }
            foundOdd = true;
        }
    };
    return true;
};

/*
Function to check if a given string is a permutation of a palindrome, 
i.e., whether a palindrome can be formed using its characters
Input: String
Output: Boolean (true if a palindrome can be formed, false if not)
*/
const isPermutationOfPalindrome = function (str) {
    const charFrequencies = buildFrequencyTable(str.toLowerCase());
    return checkMaxOneOdd(charFrequencies);
};

module.exports.isPermutationOfPalindrome = isPermutationOfPalindrome;
