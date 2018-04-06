function a() {
  console.log(this.q)
}

// If the function is called with new, this is the newly constructed object
var v = new a(); // undefined

// If the function is called with call or apply, this is the explicitly specified object
var x = a.call({q: 2}); // 2

// If the function is called with a context, this is that context object
var o = {q: 2, a: a};
o.a() // 2

// In strict mode, pick undefined, otherwise pick the global object
var q = 'global';
var y = a(); // global

// EXCEPTIONS
// null efectively ignored, default binding applied instead
a.call(null); // global

// Safer this
var d = {}; // with the delegation to Object.prototype
var e = Object.create(null); // let's say more empty than {}

a.call(e); // protects the global object from unintended side effects

// Lexical this
function b() {
  // this here is lexically inherited from `b()`
  return () => {
    console.log(this.v);
  }
}

var f = b.call({v: 2});
f.call({v: 3}); // 2 not 3

function g() {
  setTimeout(() => {
    console.log(this.v);
  }, 100);
}

g.call({v: 123}); // 123

function h() {
  setTimeout(function() {
    console.log(this.v);
  }, 100);
}


h.call({v: 123}); // undefined

function i() {
  var self = this;
  setTimeout(function() {
    console.log(self.v);
  }, 100);
}


i.call({v: 123}); // undefined
