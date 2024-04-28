const isRotation = require('../8-string-rotation').isRotation;

test('Is Rotation - Yes', () => {
    const s1 = 'ingcrack';
    const s2 = 'cracking';
    expect(isRotation(s1, s2)).toBeTruthy();
});

test('Is Rotation - Yes again', () => {
    const s3 = 'viewinter';
    const s4 = 'interview';
    expect(isRotation(s3, s4)).toBeTruthy();
});

test('Is Rotation - No', () => {
    const s3 = 'cod';
    const s4 = 'coding';
    expect(isRotation(s3, s4)).toBeFalsy();
});
