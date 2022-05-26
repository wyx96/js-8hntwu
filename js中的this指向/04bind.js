function foo() {
  console.log(this);
}

var newFoo = foo.bind('aaa');
var newFoo = foo.bind('aaa');

newFoo(); // [String: 'aaa']
newFoo(); // [String: 'aaa']
newFoo(); // [String: 'aaa']
newFoo(); // [String: 'aaa']
newFoo(); // [String: 'aaa']
newFoo(); // [String: 'aaa']

var bar = foo;
console.log(bar === foo); //true
console.log(newFoo === foo); // false
