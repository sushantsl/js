const isPermutationByCharacterCount = require('../2-is-permutation').isPermutationByCharacterCount;
const isPermutationBySort = require('../2-is-permutation').isPermutationBySort;

//ToDo - Group these tests to test both functions without code duplication
test('Is Permutation By Char Count - Yes', () => {
    const s1 = 'god';
    const s2 = 'dog';
    expect(isPermutationByCharacterCount(s1, s2)).toBeTruthy();
});

test('Is Permutation By Sort - Yes', () => {
    const s1 = 'god';
    const s2 = 'dog';
    expect(isPermutationBySort(s1, s2)).toBeTruthy();
});

test('Is Permutation By Char Count - No', () => {
    const s3 = 'cracking';
    const s4 = 'coding';
    expect(isPermutationByCharacterCount(s3, s4)).toBeFalsy();
});

test('Is Permutation By Sort - No', () => {
    const s3 = 'cracking';
    const s4 = 'coding';
    expect(isPermutationBySort(s3, s4)).toBeFalsy();
});