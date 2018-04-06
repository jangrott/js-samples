var obj = {};

// Object constant
Object.defineProperty(obj, "EXAMPLE_CONST", { value: 'Hello World', writable: false, configurable: false });

obj.a = 2;

// prevent extensions
Object.preventExtensions(obj);
obj.b = 3;
console.log(obj.b); // undefined

// seal - preventExtensions + set configurable = false
Object.seal(obj);
delete obj.a;
console.log(obj.a); // 2

// freze - seal + set writable = false
Object.freeze(obj);
