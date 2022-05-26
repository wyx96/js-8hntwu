const obj = {
  name: 'why',
  age: 18,
};

console.log(Object.keys(obj));
// [ 'name', 'age' ]

console.log(Object.values(obj));
// [ 'why', 18 ]

console.log(Object.entries(obj));
// [ [ 'name', 'why' ], [ 'age', 18 ] ]

const entries = Object.entries(obj);

const newObj = Object.fromEntries(entries);

console.log(newObj);
// { name: 'why', age: 18, height: 1.88 }

// 2.Object.fromEntries的应用场景
const queryString = 'name=why&age=18&height=1.88';
const queryParams = new URLSearchParams(queryString);
console.log(queryParams);
// URLSearchParams { 'name' => 'why', 'age' => '18', 'height' => '1.88' }
for (const param of queryParams) {
  console.log(param);
  //    [ 'name', 'why' ]
  //    [ 'age', '18' ]
  //    [ 'height', '1.88' ]
}

const paramObj = Object.fromEntries(queryParams);
console.log(paramObj);
// { name: 'why', age: '18', height: '1.88' }
