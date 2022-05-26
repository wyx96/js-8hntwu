function Person() {
  (this.name = 'jack'), (this.friends = []);
}
Person.prototype.eating = function () {
  console.log(this.name + 'eating');
};

function Student() {
  this.son = 'son';
}
let p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + 'studying');
};
