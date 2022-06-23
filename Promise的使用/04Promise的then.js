const promise = new Promise((resolve, reject) => {
  resolve('hahah');
});

// 1.同一个Promise可以被多次调用then方法
promise.then((res) => {
  console.log('res1:', res);
});

promise.then((res) => {
  console.log('res2:', res);
});

promise.then((res) => {
  console.log('res3:', res);
});
// res1: hahaha
// res2: hahaha
// res3: hahaha
// 2.then方法传入的 "回调函数: 可以有返回值
// then方法本身也是有返回值的, 它的返回值是Promise

// 1> 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 那么这个普通的值被作为一个新的Promise的resolve值
promise
  .then((res) => {
    return 'aaaaaa';
  })
  .then((res) => {
    console.log('res:', res);
    return 'bbbbbb';
  });
// hahaha res1
// res: aaaaaa

// 2> 如果我们返回的是一个Promise
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(111111);
      }, 3000);
    });
  })
  .then((res) => {
    console.log('res:', res);
  });
// res: 111111
// 3> 如果返回的是一个对象, 并且该对象实现了then
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve(222222);
      },
    };
  })
  .then((res) => {
    console.log('res:', res);
  });
// res: 222222
