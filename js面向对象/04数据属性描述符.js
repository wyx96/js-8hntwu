let obj = {
  name: 'jack',
  age: 18,
};

Object.defineProperty(obj, 'address', {
  value: '北京', //默认undefined
  configurable: false, //默认是false 该属性不可删除也不可重新定义
  enumerable: true, //默认是false 表示是否可枚举
  writable: false, //默认是false 表示该属性是否可赋值写入
});

// 测试configurable的作用
// delete obj.name
// console.log(obj.name)
// delete obj.address
// console.log(obj.address)

// Object.defineProperty(obj, "address", {
//   value: "广州市",
//   configurable: true
// })

// 测试enumerable的作用
console.log(obj);
for (var key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));

// 测试Writable的作用
// obj.address = "上海市"
// console.log(obj.address)
