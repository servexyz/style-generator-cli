import test from 'ava';

test('my passing test', t => {
    t.pass();
});

test('async test 2', t => {
  return Promise.resolve('wecodetheweb')
    .then(text => {
      t.is(text, 'wecodetheweb');
    });
})
