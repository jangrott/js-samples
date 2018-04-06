var obj = {
  a: 2,
}

console.log(Object.getOwnPropertyDescriptor(obj, "a")); // { value: 2, writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, "b", { value: 1, writable: false, configurable: true });

// writable:false example
console.log(obj.b); // 1
obj.b = 42;
console.log(obj.b); // 1

// configurable:false example
Object.defineProperty(obj, "b", { value: 4 });
console.log(obj.b); // 4

Object.defineProperty(obj, "b", { configurable: false });
// Object.defineProperty(obj, "b", { value: 6 }); // TypeError

// enumerable hide property from enumeration (for..in loop)
