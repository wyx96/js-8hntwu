// 独立函数调用
function foo() {
  console.log('foo');
}
foo();

var obj = {
  name: 'why',
  foo: function () {
    console.log('foo');
  },
};

var foo = obj.foo;
foo(); //window

function foo() {
  console.log(this);
}
var obj = {
  name: 'why',
  foo: foo,
};

var bar = obj.foo;
bar(); // window
