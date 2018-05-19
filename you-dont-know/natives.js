// Natives - built-in functions

var a = new String('Hello World'); // object wrapper around the primitive value
console.log(typeof a); // "object"
console.log(a instanceof String); // true
console.log(Object.prototype.toString.call(a)); // [object String] - String is an internal "class"

// object wrapper gotchas
var b = new Boolean(false);

if (!b) {
  console.log('Ups'); // not executed
}

// unboxing
if (!b.valueOf()) {
  console.log('Printed!');
}
