const isSubstring = require('../7-is-substring').isSubstring;

test('Is Substring - Yes, first is shorter', () => {
    const s1 = 'rack';
    const s2 = 'cracking';
    expect(isSubstring(s1, s2)).toBeTruthy();
});

test('Is Substring - No, not a substring', () => {
    const s3 = 'rack';
    const s4 = 'coding';
    expect(isSubstring(s3, s4)).toBeFalsy();
});

test('Is Substring - No, first is longer', () => {
    const s5 = 'accessibility';
    const s6 = 'access';
    expect(isSubstring(s5, s6)).toBeFalsy();
});