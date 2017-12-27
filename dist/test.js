'use strict';

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava2.default)('my passing test', function (t) {
  t.pass();
});

(0, _ava2.default)('async test 2', function (t) {
  return Promise.resolve('wecodetheweb').then(function (text) {
    t.is(text, 'wecodetheweb');
  });
});