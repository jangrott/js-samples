// syntax
// literal form
var obj1 = {
  a: 2,
};

// constructed form
var obj2 = new Object();
obj2.a = 2;

// primary types: string, number, boolean, null, undefined, object
console.log(typeof null); // object

// function is a subtype of object (technically, a “callable object”)
console.log(typeof function (){}); // function
console.log(Object.prototype.toString.call(function(){})); // [object Function]

// special object subtypes (complex primitives): String, Number, Boolean, Object,
// Function, Array, Date, RegExp, Error
// these are actually just built-in functions
var str1 = 'hello';
console.log(typeof str1); // string
console.log(str1 instanceof String); // false
console.log(Object.prototype.toString.call(str1)); // [object String]

var str2 = new String('hello');
console.log(typeof str2); // object
console.log(str2 instanceof String); // true
console.log(Object.prototype.toString.call(str2)); // [object String]
