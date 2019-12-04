const promiseChain = require('./promiseChain')

var f = (x) => x * x;
var g = (y) => y + 3;

const f_after_g = promiseChain.composeAsync(f, g);

test('verify promise chaining', () => {
    return f_after_g(2).then(x => expect(x).toBe(7));
})

test('verify promise chaining', () => {
    return f_after_g(3).then(x => expect(x).toBe(12));
})

const g_then_f = promiseChain.composeAsync(g,f);

test('verify promise chaining', () => {
    return g_then_f(2).then(x => expect(x).toBe(25));
})

test('verify promise chaining', () => {
    return g_then_f(3).then(x => expect(x).toBe(36));
})