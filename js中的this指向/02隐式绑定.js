// 隐式绑定 object.fn（）
// object对象会被js引擎绑定到fn函数的this里面

function foo() {
  console.log('foo');
}
// 案例一
var obj = {
  name: 'why',
  foo: foo,
};
obj.foo(); //obj对象

// 案例二
var obj = {
  name: 'why',
  eating: function () {
    console.log(this.name + '在吃东西');
  },
  running: () => {
    console.log(obj.name + '在跑步');
  },
};

obj.eating(); //obj
obj.running(); // window

var fn = obj.eating;
fn(); //window
