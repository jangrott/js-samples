// all about objects being linked to other objects
// OO-style
function Foo(who) {
  this.name = who;
}

Foo.prototype.identity = function() {
  return `I'm ${this.name}`;
}

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  console.log(`Hello! ${this.identity()}`);
}

var b1 = new Bar('Tom');
var b2 = new Bar('Ben');

b1.speak(); // Hello! I'm Tom
b2.speak(); // Hello! I'm Ben

// OOLO-style
XYZ = {
  init: function (who) {
    this.name = who;
  },
  identity: function() {
    return this.name;
  }
};

var FZA = Object.create(XYZ);

FZA.speak = function() {
  console.log(`Hello! I'm ${this.identity()}`);
}

var b3 = Object.create(FZA);
b3.init('Adam');
var b4 = Object.create(FZA);
b4.init('Stanley');

b3.speak(); // Hello! I'm Adam
b4.speak(); // Hello! I'm Stanley
