let obj = {
  name: 'jack',
  age: 18,
};
// 获取
console.log(obj.name);
// 赋值
obj.age = 20;

// 删除
delete obj.age;

// 遍历
for (let key in obj) {
  console.log(key); // name age
}
