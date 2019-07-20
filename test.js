const assert = require('assert');
const math = require('./index')



// test add
assert.strictEqual(math('add',1,2), 3,'Addition of 1 and 2 does not equal 3')

// test subtract
assert.strictEqual(math('subtract',6,4), 2,'Subtraction of 4 from 6 does not equal 2')

// test unknown operation
assert.throws(()=>math('foobar',3,7),'Attempting a unknown operation did not throw a error')