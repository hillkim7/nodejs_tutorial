// file: my_test.js
// simple example of using tap module.
// run: node my_test.js

var test = require('tap').test;

test("addition of 2 and 2 works", function(t) {
  t.equal(2+2, 4, "2+2 should be 4");
  t.end();
});

