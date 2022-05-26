// call/apply是可以指定this的绑定对象

function foo() {
  console.log('foo', this);
}

var obj = {
  name: 'why',
};
foo(); //window

foo.call(obj); //obj
foo.apply(obj); // obj
foo.apply('aaa'); //aaa

// apply和call的区别
function sum(n1, n2) {
  console.log(n1 + n2, this);
}
sum.call('call', 1, 2); //3 [String:'call]
sum.apply('apply', [2, 4]); // 6 [String: 'apply']
