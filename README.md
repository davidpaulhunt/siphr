siphr
=====

Simple interface to encrypt/decrypt a single value or the keys and values of a plain object.

Siphr uses the secret you provide to encrypt (AES256) values as base64 strings.

Possible use cases:
* passwords
* web tokens
* application level encryption before persisting to database

##### Add-ons

You can use [jstrong](https://github.com/davidpaulhunt/jstrong) to send complete json objects with both its keys and values encrypted.

### Installation

Using npm:
```
$ npm install --save siphr
```

### Usage

```js
const siphr = require('siphr')(MY_SECRET_KEY);

const str = siphr.mask('some private information'); // => sFHg6oX9AMI7ejBsw==

const cleanStr = siphr.unmask(str); // => 'some private information'
```

### Tests
```
$ npm test
```
