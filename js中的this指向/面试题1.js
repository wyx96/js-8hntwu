var name = 'window';

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name);
  },
};

function sayName() {
  var sss = person.sayName;
  sss(); // window 独立函数
  person.sayName(); //  person
  person.sayName(); // person
  (b = person.sayName)(); //window 独立函数
}

sayName();
