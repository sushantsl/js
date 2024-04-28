const isPermutationOfPalindrome = require('../4-palindrome-permutation').isPermutationOfPalindrome;

test('Is Permutation Of Palindrome - Yes', () => {
    const s1 = 'A Rat Was It I Saw?';
    expect(isPermutationOfPalindrome(s1)).toBeTruthy();
});

test('Is Permutation Of Palindrome - No', () => {
    const s2 = 'Cracking Coding';
    expect(isPermutationOfPalindrome(s2)).toBeFalsy();
});

//ToDo: Add test cases for supplementary units