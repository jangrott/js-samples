var object = {
  a: 2
}

// create an object linked to 'object'
var anotherObject = Object.create(object);

console.log(anotherObject.a); // 2

for (key in anotherObject) {
  console.log(`Prop ${key} with value ${anotherObject[key]}`); // Prop a with value 2
}

// shadowing
console.log(anotherObject.a); // 2
console.log(object.a); // 2

console.log(anotherObject.hasOwnProperty( "a" )); // false
console.log(object.hasOwnProperty( "a" )); // true

anotherObject.a++; // oops, implicit shadowing!

console.log(anotherObject.a); // 3
console.log(object.a); // 2

console.log(anotherObject.hasOwnProperty( "a" )); // true

// class functions
function Foo() {
  console.log('Hello from Foo');
}

console.log(Foo.prototype); // Foo {}

// prototypal inheritance - the dynamic-language version of classical inheritance
var a = new Foo(); // Hello from Foo

console.log(a); // Foo {}

function Bar(name) {
  this.name = name;
}

Bar.prototype.sayHello = function() {
  console.log(this.name);
}

var mark = new Bar("Mark");
mark.sayHello(); // Mark

function Xyz(name, age) {
  Bar.call(this, name);
  this.age = age;
}

// `Xyz.prototype.constructor` is gone
Xyz.prototype = Object.create(Bar.prototype);
Xyz.prototype.getAge = function() {
  return this.age;
}

var tom = new Xyz('Tom', 29);
tom.sayHello(); // Tom
console.log(tom.getAge()); // 29


// class relationship
function areRelated(o1, o2) {
  function F() {}
  F.prototype = o2;

  return o1 instanceof F;
}

var b = {}
var c = Object.create(b);
var d = {};

console.log(areRelated(c, b)); // true
console.log(areRelated(c, d)); // false

console.log(Bar.prototype.isPrototypeOf(tom)); // true
console.log(b.isPrototypeOf(c)); // true

console.log(Object.getPrototypeOf(tom)); // Bar { ... }

// creating links
var xyq = {
  sth: function() {
    console.log('Tell me sth')
  }
}

var i = Object.create(xyq); // creates a new object (i) linked to the object (xyq)
i.sth(); // Tell me sth

i.doSth = function() {
  this.sth();
}
// internal delegation
i.doSth(); // Tell me sth
