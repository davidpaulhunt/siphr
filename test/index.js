const assert = require('assert');
const siphr = require('../siphr')('password');

const str = 'abc123';
const encryptedStr = siphr.mask(str);
const unencryptedStr = siphr.unmask(encryptedStr);

assert.notEqual(encryptedStr, str);
assert.equal(unencryptedStr, str);

const obj = { foo: 'bar', count: 5 };
const encryptedObj = siphr.mask(obj);
const unencryptedObj = siphr.unmask(encryptedObj);

assert.notDeepEqual(encryptedObj, obj);
assert.deepEqual(unencryptedObj, obj);
