function a() {
  console.log(this.v);
}

var o = {
  v: 2,
};

a.call(o); // 2

var b = function() {
  a.call(o);
};

b(); // 2

setTimeout(b, 100); // 2

// hard-bound `b` can no longer have its `this` overridden
b.call({}); // still 2

function c(something) {
  console.log(this.v, something);
  return this.v + something;
}

var d = function() {
  return c.apply(o, arguments);
}

var e = d(3); // 2 3
console.log(e); // 5

var f = c.bind(o);

var g = f(3); // 2 3
console.log(g); // 5

// use `obj` as `this` for `c(..)` calls
[1, 2, 3].forEach(c, o); // 2 1  2 2  2 3
