const obj = {
  name: 'why',
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log('get---------');
    return Reflect.get(target, key);
  },
  set: function (target, key, newValue, receiver) {
    console.log('set---------');
    target[key] = newValue;

    Reflect.set(target, key, newValue, receiver);
  },
});

objProxy.name = 'kobe';
console.log(objProxy.name);
