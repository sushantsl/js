const oneEditAway = require('../5-one-edit-away').oneEditAway;

test('Is One Edit Away - 1 addition', () => {
    const s1 = 'pale';
    const s2 = 'ple';
    expect(oneEditAway(s1, s2)).toBeTruthy();
});

test('Is One Edit Away - 1 addition, 1 replacement', () => {
    const s3 = 'pale';
    const s4 = 'bae';
    expect(oneEditAway(s3, s4)).toBeFalsy();
});

test('Is One Edit Away - Too far', () => {
    const s5 = 'cracking';
    const s6 = 'coding';
    expect(oneEditAway(s5, s6)).toBeFalsy();
});
