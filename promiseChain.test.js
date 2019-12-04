const promiseChain = require('./promiseChain')

test('verify promise chaining', () => {

    var f = (x) => x * x;
    var g = (y) => y + 3;

    const f_after_g = promiseChain.composeAsync(f, g);

    var result;
    return f_after_g(2).then(x => expect(x).toBe(7) );
})
