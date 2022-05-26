function foo() {}

// 1.constructor属性
// foo.prototype这个对象中有一个constructor属性
console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// prototype.constructor = 构造函数本身
// console.log(foo.prototype.constructor) // [Function: foo]

// 真实开发中我们可以通过Object.defineProperty方式添加constructor
Object.defineProperty(foo.prototype, 'constructor', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: foo,
});
