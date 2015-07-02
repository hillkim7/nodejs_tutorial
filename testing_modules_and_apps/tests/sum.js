var sum = require('../client/sum_client');
var test = require('tap').test;

test('sum 1 and 2', function(t) {
  sum(1, 2, function(err, result) {
    t.notOk(err, 'no error');
    t.equal(result, 3, '1 + 3 should be equal 3');
    t.end();
  });
});

test('sum 5 and 0', function(t) {
  sum(5, 0, function(err, result) {
    t.notOk(err, 'no error');
    t.equal(result, 5, '5 + 0 shuold be equal to 5');
    t.end();
  });
});

test('sum 5 and -2', function(t) {
  sum(5, -2, function(err, result) {
    t.notOk(err, 'no error');
    t.equal(result, 3, '5 + -2 should be equal to 3');
    t.end();
  });
});

