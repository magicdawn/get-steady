# get-steady
> A simple `throttle` implemantation

[![Build Status](https://img.shields.io/travis/magicdawn/get-steady.svg?style=flat-square)](https://travis-ci.org/magicdawn/get-steady)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/get-steady.svg?style=flat-square)](https://codecov.io/gh/magicdawn/get-steady)
[![npm version](https://img.shields.io/npm/v/get-steady.svg?style=flat-square)](https://www.npmjs.com/package/get-steady)
[![npm downloads](https://img.shields.io/npm/dm/get-steady.svg?style=flat-square)](https://www.npmjs.com/package/get-steady)
[![npm license](https://img.shields.io/npm/l/get-steady.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i get-steady --save
```

## API
```js
const steady = require('get-steady');

steady(fn, wait)
```

- `fn`: the function need to be wrapper
- `wait` wait time

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org