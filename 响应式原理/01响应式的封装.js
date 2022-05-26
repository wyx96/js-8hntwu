// 对象的响应式
const obj = {
  name: 'why',
  age: 18,
};

// 封装一个响应式的函数
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

watchFn(function () {
  const newName = obj.name;
  console.log('你好啊, 李银河');
  console.log('Hello World');
  console.log(obj.name); // 100行
});

watchFn(function () {
  console.log(obj.name, 'demo function -------');
});

function bar() {
  console.log('普通的其他函数');
  console.log('这个函数不需要有任何响应式');
}

obj.name = 'kobe';
reactiveFns.forEach((fn) => {
  fn();
});

// 你好啊, 李银河
// Hello World
// kobe
// kobe demo function -------
