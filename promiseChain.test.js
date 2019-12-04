const promiseChain = require('./promiseChain')

var f = (x) => x * x;
var g = (y) => y + 3;

const f_then_g = promiseChain.composeAsync(f, g);

test('verify promise chaining', () => {
    expect(f_then_g(2)).resolves.toEqual(7);
})

test('verify promise chaining', () => {
    expect(f_then_g(3)).resolves.toEqual(12);
})

const g_then_f = promiseChain.composeAsync(g,f);

test('verify promise chaining', () => {
    expect(g_then_f(2)).resolves.toEqual(25);
})

test('verify promise chaining', () => {
    expect(g_then_f(3)).resolves.toEqual(36);
})