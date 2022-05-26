let obj = {
  name: 'jack',
  age: 18,
};

Object.defineProperty(obj, 'height', {
  value: 1.88,
});

console.log(obj); // {  name :'jack',age:18}
console.log(obj.height); //1.88
