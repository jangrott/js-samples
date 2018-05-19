var arr = [1,2,3];

console.log(arr.length); // 3

delete arr[2];

console.log(arr); // [ 1, 2,  ]
console.log(arr.length); // 3

// "sparse" array
var b = [];

b[0] = 1;
b[2] = 3;

console.log(b.length); // 3
console.log(b[1]); // undefined
console.log(b); // [1, , 3]

// don't add string keys/properties to array
var c = [];
c["13"] = 2;

console.log(c.length); // 14

var d = [];
d[0] = 1;
d["p"] = 2;

console.log(d); // [ 1, p: 2 ]
console.log(d.length); // 1

// convert array-like value into array
function f() {
  console.log(arguments); // { '0': 'foo', '1': 'bar' }
  var arr = Array.prototype.slice.call(arguments);
  return arr;
}

function fES6() {
  var arr = Array.from(arguments);
  return arr;
}

console.log(f("foo", "bar")); // [ 'foo', 'bar' ]
console.log(fES6("foo", "bar")); // [ 'foo', 'bar' ]

var e = "foo";
console.log(e.join); // undefined

console.log(Array.prototype.join.call(e, '-')); // f-o-o
console.log(Array.prototype.map.call(e, (c) => c.toUpperCase()).join('')); // FOO

// reverse String
var g = "Hello!";

var gReversed = g.split('').reverse().join('');
console.log(gReversed); // !olleH

// numbers
var h = 2;
console.log(h.toFixed(2)); // 2.00
console.log((2).toFixed(2)); // 2.00 - 2.toFixed(2) throws error
console.log(0.2.toFixed(2)); // 0.20
console.log(2..toFixed(2)); // 2.00

var i = 0.1 + 0.2;
console.log(i === 0.3); // false
console.log(i); // 0.30000000000000004

function areNumbersCloseEnoughToBeEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

console.log(areNumbersCloseEnoughToBeEqual(i, 0.3)); // true

var j = 2 / 'foo';
console.log(j); // NaN
console.log(typeof j === 'number'); // true

console.log(j === NaN); // false
console.log(NaN !== NaN); // true
console.log(isNaN(j)); // true
console.log(isNaN('foo')); // true !

console.log(Number.isNaN('foo')); // false

// infinity
var k = 1 / 0;
console.log(k); // positive infinity - Infinity

var l = -1 / 0;
console.log(l); // negative inifinity - -Infinity
console.log(Infinity / -Infinity); // NaN

console.log(0 / Infinity); // 0
console.log(0 / -Infinity); // -0

console.log(0 === -0); // true
console.log(0 > -0); // false

console.log(Object.is(j, NaN)); // true
console.log(Object.is(0 / -3, -0)); // true
console.log(Object.is(0 / -3, 0)); false

// value vs reference
var m = 2;
var n = m; // `n` is a copy of the value in `m`

m++;
console.log(`${m} : ${n}`); // 3 : 2

var o = [1,2,3];
var p = o; // `p` is a reference to the shared `[1,2,3]` value

p.push(4);
console.log(o); // [1,2,3,4]
console.log(p); // [1,2,3,4]

p = [5,6,7,8];
console.log(o); // [1,2,3,4]
console.log(p); // [5,6,7,8]

function fr(x) {
  x.push(5);

  x = [9,8,7,6];
}

fr(o.slice());
console.log(o); // [1,2,3,4]

fr(o);
console.log(o); // [1,2,3,4,5]

function foo(wrapper) {
  wrapper.a = 8;
}

var obj = { a: 2 };
foo(obj);
console.log(obj); // { a: 8 }

function bar(num) {
  num = num + 1;
  console.log(num); // 3
}

var q = 2;
var y = Number(q);
bar(y);
console.log(y); // 2
