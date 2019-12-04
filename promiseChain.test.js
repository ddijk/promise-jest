const promiseChain = require('./promiseChain')

test('verify promise chaining', () => {
       
    var f = (x) => x*x;
    var g = (y) => y+3;
    
    const f_after_g = promiseChain.composeAsync(f, g);

    var result;
    f_after_g(2).then(x=> { result =x; console.log('res='+result);});
    expect(result).toBe(25);
});
