Function.prototype.xyCall = function (thisArg, ...args) {
  thisArg === null ? window : thisArg;
  if (typeof thisArg !== 'object') thisArg = new Object(thisArg);
  const fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};

function sum(num1, num2) {
  console.log('sum函数被执行', this, num1, num2);
  return num1 + num2;
}

var result = sum.xyCall('abc', 20, 30);
