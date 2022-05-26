// ES11: 空值合并运算 ??

const foo = undefined;
// const bar = foo || "default value"
const bar = foo ?? 'defualt value';

console.log(bar);

const info = {
  name: 'why',
  // friend: {
  //   girlFriend: {
  //     name: "hmm"
  //   }
  // }
};
// ES11提供了可选链(Optional Chainling)
console.log(info.friend?.girlFriend?.name);
