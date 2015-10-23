var test = require('tape');
var find = require('./FIND');

test('it should upper case a string', (t) => {
  t.plan(3);
  t.equal( find( 'a', 'fooabar'), 4)
  t.equal( find( 'bar', 'fooabar'), 5)
  t.equal( find( 'foo', 'fooabar'), 1)
})

