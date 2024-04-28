const hasUniqueChars = require('../1-has-unique-chars').hasUniqueChars;

test('Has Unique Chars - All unique', () => {
    const s1 = 'abcdefgh';
    expect(hasUniqueChars(s1)).toBeTruthy();
});

test('Has Unique Chars - One duplicate', () => {
    const s2 = 'abbcdeff';
    expect(hasUniqueChars(s2)).toBeFalsy();
});

test('Has Unique Chars - Same letter with different case', () => {
    const s3 = 'aAbcdefg';
    expect(hasUniqueChars(s3)).toBeTruthy();
});