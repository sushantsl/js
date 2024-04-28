/*
Function to determine if two strings are permutations of each other
Input: String 1, String 2
Output: Boolean (true if String 1 is a permutation of String 2, false if not)
Assumption: 
- Comparision is case sensitive, whitespace is significant, i.e, "god " is not a permutation of "dog"
- ASCII strings with max 128 chars in alphabet
*/

//Inefficient in space usage and uses sort()
const isPermutationBySort = function (s1, s2) {

    if (s1.length != s2.length) {
        return false;
    }
    let arr1 = s1.split('').sort();
    let arr2 = s2.split('').sort();

    return arr1.join() == arr2.join();
};

//Counts how many times each character appears per string and compares the two counts
const isPermutationByCharacterCount = function (s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    const letters = new Array(128).fill(0);

    for (let i = 0; i < s1.length; ++i) {
        let index = s1.charCodeAt(i)
        letters[index]++;
    }

    for (let j = 0; j < s2.length; ++j) {
        let index = s2.charCodeAt(j);
        letters[index]--;
        if (letters[index] < 0) {
            return false;
        }
    }

    //Reached end of loop, no unexpected character was found
    return true;
};

module.exports = { isPermutationByCharacterCount, isPermutationBySort };
