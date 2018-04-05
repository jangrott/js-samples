function a(v) {
  this.v = v;
}

// constructing a new object and set that new object as the this for the call of a(..)
var o = new a(2); // new is the final way that a function call’s this can be bound
console.log(o.v); // 2
