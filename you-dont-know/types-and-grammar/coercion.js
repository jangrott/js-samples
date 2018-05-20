var a = 42;

var b = a + ''; // implicit coercion
console.log(typeof b); // string
var c = new String(42); // explicit coercion

// JSON stringification

var d = JSON.stringify([1, null, undefined, function() {}, 4]);
console.log(d); // [1, null, null, null, 4]

var e = JSON.stringify({a: 2, b: function() {}});
console.log(e); // { "a": 2 }

// string <> number

var f = 42;
var g = String(42);

var i = "3.14";
var j = Number(i);

var k = f.toString();
var l = +i;

console.log(5 + +i); // 8.14

// date <> number
var m = new Date();
console.log(+m); // Unix timestamp

var n = new Date().getTime();
console.log(n); // Unix timestamp

var p = Date.now();
console.log(p); // Unix timestamp

// ~ - ~x is roughly the same as -(x+1)
var q = 'Hello';

if (q.indexOf('lo') >= 0) {
  console.log('found it!');
}

if (q.indexOf('lo') != -1) {
  console.log('found it');
}

if (q.indexOf('ol') < 0) {
  console.log('not found it!');
}

if (q.indexOf('ol') == -1) {
  console.log('not found it');
}

if (~q.indexOf('lo')) {
  console.log('found it!');
}

if (~q.indexOf('lo')) {
  console.log('found it');
}

if (!~q.indexOf('ol')) {
  console.log('not found it!');
}

if (!~q.indexOf('ol')) {
  console.log('not found it');
}

// ~~ truncate decimal part of number
var r = 4.25;
console.log(~~d); // 4

var o = { num: 21, toString: function() { return 2 * this.num } };
console.log(parseInt(o)); // 42

// * -> Boolean
var a = "0";
console.log(Boolean(a)); // true
console.log(!!a); // true

// implicit coercion

// string <> number
var u = 42;
var w = "21";

console.log(u + w); // 4221
console.log(w + u); // 2142

var a2 = [1,2];
var b2 = [3,4];

console.log(a + b); // "1,23,4"

console.log(u + ''); // implicit coercion to string
console.log(w - 0); // implicit coercion to number

console.log([3] - [1]); // 2

// && , ||
var a1 = 21;
var b1 = "abc";
var c1 = null;

console.log(a1 && b1); // abc
console.log(a1 || b1); // 21
console.log(c1 && a1); // null
console.log(c1 || b1); // abc

// Symbol coercion
var s1 = Symbol('yeah');
console.log(String(s1)); // Symbol(yeah)
// console.log(s1 + ''); // TypeError

// ==, ===
var a3 = null;
var b3;

console.log(a3 == null && a3 == undefined); // true
console.log(b3 == undefined && b3 == null); // true

console.log(a3 === null && a3 === undefined); // false
console.log(b3 === undefined && b3 === null); // false

var cond;

if (a == null) {
  // execute only if `a` equals to null or undefined
}
