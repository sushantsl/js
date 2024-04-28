/*
Function to compress a string comprised of only uppercase and lowercase characters 
using counts of consecutively repeated characters.
Example:
aabcccccaaa -> a2b1c5a3
reduce -> reduce
Input: String with 0 or more consecutively repeated characters
Output: Original String if no repitions or if length cannot be reduced, or
Compressed String with counts of repeated characters
*/
const compressString = function (str) {
    //Using array to avoid multiple string concatenation which is expensive
    const compressed = new Array();
    let countConsecutive = 0;
    for (let i = 0; i < str.length; ++i) {
        countConsecutive++;

        //If next character is different or end is reached, append to result
        if (i + 1 >= str.length || str[i] != str[i + 1]) {
            compressed.push(str[i]);
            compressed.push(countConsecutive);
            countConsecutive = 0;
        }
    }

    if (compressed.length < str.length) {
        return compressed.join('');
    }
    return str;
};

module.exports.compressString = compressString;
