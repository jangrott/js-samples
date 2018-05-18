// JavaScript defines seven built-in types:
// null, undefined, boolean, number, string, object, symbol(ES6)

// typeof inspects the type of given value
console.log(typeof undefined     === "undefined"); // true
console.log(typeof true          === "boolean");   // true
console.log(typeof 42            === "number");    // true
console.log(typeof "42"          === "string");    // true
console.log(typeof { life: 42 }  === "object");    // true
console.log(typeof Symbol()      === "symbol");    // true
console.log(typeof null === "object");
function a() {}
console.log(typeof a === "function"); // true

var b;
console.log(b); // undefined
// console.log(c); // undeclared - ReferenceError c is not defined

console.log(typeof b); // undefined
console.log(typeof c); // undefined !!
