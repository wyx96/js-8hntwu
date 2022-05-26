Function.prototype.yxBind = function (thisArg, ...argArray) {
  // 获取真正需要调用的函数
  var fn = this;
  // 绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? new Object(thisArg) : window;
  function proxyFn(...args) {
    thisArg.fn = fn;
    var finalArgs = [...args, ...argArray];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }
  return proxyFn;
};

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);
}

// 系统
var newSum = sum.bind('aaa', 10, 20, 30);
newSum(40);

// 手写
var newSum = sum.yxBind('bbb', 10, 20, 30);
newSum(40);
