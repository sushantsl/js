const replaceSpaces = require('../3-URLify').replaceSpaces;

test('URLify - 2 Spaces', () => {
    const s1 = 'My Home Page';
    const r1 = 'My%20Home%20Page'
    expect(replaceSpaces(s1)).toBe(r1);
});

test('URLify - 3 Spaces', () => {
    const s2 = 'Please Mind Your Step';
    const r2 = 'Please%20Mind%20Your%20Step';
    expect(replaceSpaces(s2)).toBe(r2);
});

test('URLify - No Spaces', () => {
    const s3 = 'Spaceless';
    const r3 = 'Spaceless';
    expect(replaceSpaces(s3)).toBe(r3);
});