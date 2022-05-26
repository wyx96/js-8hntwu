const obj = {
  _name: 'why',
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log('get方法被访问--------', key, receiver);
    console.log(receiver === objProxy); //true
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log('set方法被访问--------', key, receiver);
    Reflect.set(target, key, newValue, receiver);
  },
});

objProxy.name = 'kobe';
console.log(objProxy._name);
