function a() {
  // call-stack is `a`
  // call-site is in the global scope
  console.log(this.v); // 2
}

var v = 2;

a(); // call-site for `a

function b() {
  // If strict mode is in effect, the global object is not eligible for the default binding
  "use strict";
  console.log(this.v); // undefined
}

b();

(function() {
  // the global object is only eligible for the default binding if the contents of a() are not running in strict mode
  "use strict";
  a(); // 2
})();