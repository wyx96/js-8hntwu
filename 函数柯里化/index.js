function yxCurrying(fn) {
  function curried(...args) {
    // 判断当前接收的参数个数
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // 没有达到个数
      function curried2(...args2) {
        return curried.apply(this, args.concat(args2));
      }
      return curried2;
    }
  }
  return curried;
}

function add1(x, y, z) {
  return x + y + z;
}

var curryAdd = yxCurrying(add1);
console.log(curryAdd(10, 20, 30));
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));
