// flat
const nums = [
  10,
  20,
  [2, 9],
  [
    [30, 40],
    [10, 45],
  ],
  78,
  [55, 88],
];

const newNums = nums.flat();

console.log(newNums);
// [ 10, 20, 2, 9, [ 30, 40 ], [ 10, 45 ], 78, 55, 88 ]
const newNums2 = nums.flat(2);
const newNums2 = nums.flat(Infinity);
console.log(newNums2);
// [10, 20, 2, 9, 30, 40, 10, 45, 78, 55, 88];
