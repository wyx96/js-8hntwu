Function.prototype.xyApply = function (thisArg, args) {
  thisArg === null ? window : thisArg;
  if (typeof thisArg === 'object') thisArg = new Object(thisArg);
  const fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};
function sum(num1, num2) {
  console.log('sum被调用', this, num1, num2);
  return num1 + num2;
}

// 系统
var result = sum.apply('abc', [20, 30]);
// 手写
var result = sum.xyApply('abc', [20, 30]);
