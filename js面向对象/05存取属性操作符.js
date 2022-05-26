let obj = {
  name: 'jack',
  age: 18,
  _address: '北京',
};

// 存取属性描述符
// 1.隐藏某一个私有属性被希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符
Object.defineProperty(obj, 'address', {
  enumerable: true,
  configurable: true,
  get: function () {
    foo();
    return this._address;
  },
  set: function (nv) {
    bar();
    this._address = nv;
  },
});
obj.address = '上海市';
console.log(obj.address);
function foo() {
  console.log('获取了一次address的值');
}

function bar() {
  console.log('设置了addres的值');
}
