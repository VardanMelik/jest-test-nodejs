const math = require('./math');

test('Should calculate Total Tip', () => {
    const total = math(10, 0.3)
    expect(total).toBe(13);
})