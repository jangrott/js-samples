class A {

  constructor(num) {
    this.num = num;
  }

  getNum() {
    return this.num;
  }
}

let a1 = new A(21);
console.log(a1.getNum());

A.prototype.getNum = function() {
  return Math.random();
}

let a2 = new A(30);
console.log(a2.getNum()); // for sure not 30

console.log(a1.getNum()); // for sure not 21

class B {

  constructor() {
    // shared state among instances
    // this.count++ would implicitly create a separate shadowed .count property
    B.prototype.count++;

    console.log(`Hello ${this.count}`);
  }

}

B.prototype.count = 0;

let b1 = new B(); // Hello 1
let b2 = new B(); // Hello 2

console.log(b1.count);
console.log(b2.count);

class C {
  constructor(id) {
    // shadowing `id()` method with property value on the instance
    this.id = id;
  }

  id() {
    console.log(`Id: ${this.id}`);
  }
}

var c1 = new C(123);
c1.id(); // TypeError c1.id is not a function
