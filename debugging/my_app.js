var a = 0;

function init() {
  a = 1;
}

function incr() {
  var a = a + 1;
}

init();
console.log('a initial value: %d', a);

incr();
console.log('a later value: %d', a);

