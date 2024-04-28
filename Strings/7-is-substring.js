/*
Function to check if a string is a substring of another string
(Implementation of includes() method)
Input: Two strings s1, s2
Output: Boolean (true if s1 is a substring of s2, false if not)
*/
const isSubstring = function (s1, s2) {
    const m = s1.length;
    const n = s2.length;
    if (n >= m) {
        for (let i = 0; i <= n - m; ++i) {
            let j = 0;
            for (j = 0; j < m; ++j) {
                if (s2[i + j] != s1[j]) {
                    break;
                }
            }
            if (j == m) {
                return true;
            }
        }
    }
    return false;
};

module.exports.isSubstring = isSubstring;
