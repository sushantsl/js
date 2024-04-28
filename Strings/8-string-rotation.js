/*
Function to check if a string is a rotation of another string
Example - 
s1 = xy = waterbottle
x = wat;
y = erbottle
s2 = yx = erbottlewat
s2 is a rotation of s1
Input: Two strings str1, str2
Output: Boolean (true if str2 is a rotation of str1)
*/
const isRotation = function (str1, str2) {
    const len = str1.length;
    if (len == str2.length && len > 0) {
        let concatenatedString = str1 + str1;
        return (concatenatedString.includes(str2));
    }
    return false;
};

module.exports.isRotation = isRotation;
