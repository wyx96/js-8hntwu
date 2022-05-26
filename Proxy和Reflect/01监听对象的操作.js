const obj = {
  name: 'why',
  age: 18,
};

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问了`);
      return value;
    },
    set: function (Nval) {
      console.log(`监听到obj对象的${key}属性被设置值`);
      value = Nval;
    },
  });
});

obj.name = 'jack';
obj.age = 19;

console.log(obj.name);
console.log(obj.age);
