/*
Function to check if two given strings are one edit(or zero)
away from being identical
Input - String 1, String 2
Output - Boolean (true if the strings can be made identical by making one or less changes,
                  false if they can't be with one edit)
*/
const oneEditAway = function (first, second) {
    //Check length. Should not differ by more than 1
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }

    //Get shorter and longer string
    let s1 = (first.length < second.length) ? first : second;
    let s2 = (first.length < second.length) ? second : first;

    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;

    while (index2 < s2.length && index1 < s1.length) {
        if (s1[index1] != s2[index2]) {
            //Ensure this is the first difference
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
            if (s1.length == s2.length) {
                //One character can be replaced. Move shorter pointer
                index1++;
            }
        } else {
            //Characters are identical. Move shorter pointer
            index1++;
        }
        //Move longer pointer in all cases
        index2++;
    }
    return true;
};

module.exports.oneEditAway = oneEditAway;