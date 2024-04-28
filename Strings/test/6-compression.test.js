const compressString = require('../6-compression').compressString;

test('Compression - Repeating chars, long string', () => {
    const s1 = 'aabcccccaaa';
    const r1 = 'a2b1c5a3'
    expect(compressString(s1)).toBe(r1);
});

test('Compression - No Repeating chars', () => {
    const s2 = 'reduce';
    const r2 = 'reduce';
    expect(compressString(s2)).toBe(r2);
});

test("Compression - Repeating chars, result won't be shorter", () => {
    const s3 = 'aabbccdd';
    const r3 = 'aabbccdd';
    expect(compressString(s3)).toBe(r3);
});
