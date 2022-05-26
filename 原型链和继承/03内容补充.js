let obj = {
  name: 'why',
  age: 18,
};

let info = Object.create(obj, {
  address: {
    value: '北京',
    enumerable: true,
  },
});

// hasOwnProperty方法
console.log(info.hasOwnProperty('address')); //true
console.log(info.hasOwnProperty('name')); //false

// in 无论在对象上还是原型中返回的都是true
console.log('address' in info);
console.log('name' in info);

// isPrototypeOf()

var obj = {
  name: 'why',
  age: 18,
};

var info = Object.create(obj);
console.log(obj.isPrototypeOf(info)); //true
