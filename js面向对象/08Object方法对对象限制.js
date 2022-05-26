var obj = {
  name: 'why',
  age: 18,
};

// 禁止对象继续添加新的属性
Object.preventExtensions(obj);

// 禁止对象配置/删除里面的属性
Object.seal(obj);

// 让属性不可以修改(writable:false)
Object.freeze(obj);

//
