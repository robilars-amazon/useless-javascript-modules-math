const assert = require('assert');
const math = require('./index')


// test add
assert.strictEqual(math('add',1,2), 3,'Addition of 1 and 2 does not equal 3')

// test subtract
assert.strictEqual(math('subtract',6.2,4), 2.2,'Subtraction of 4 from 6 does not equal 2.2')

// test multiply
assert.strictEqual(math('multiply',2,3), 6,'Multiplication of 2 and 3 does not equal 6')

// test divide
assert.strictEqual(math('divide',10,3), 3.3333333333333335,'Division of 10 by 3 does not equal 3.33...')

// test pow
assert.strictEqual(math('pow',3,3), 27,'3 cubed is not 27')

// test divide
assert.strictEqual(math('root',27,3), 3,'The cubed root of 27 is not 3')

// test unknown operation
assert.throws(()=>math('foobar',3,7),'Attempting a unknown operation did not throw a error')