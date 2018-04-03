function a() {
  console.log(this.v);
}

var o = {
  v: 2,
  a: a,
  b: function() {
    console.log(this.v);
  },
};

o.a(); // 2
o.b(); // 2
a(); // undefined

var p = {
  v: 42,
  o: o,
};

p.o.a(); // 2

// Implicitly lost
var c = o.a; // function reference/alias

var v = 'oops global';

c(); // global

function doA(fn) {
  fn();
}

doA(o.a); // oops global