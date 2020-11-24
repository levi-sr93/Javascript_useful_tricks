//get Array length
let arr = [1, 2, 4];

console.log(arr.length); // 3

let obj = { a: 1, b: 2, c: 3 };
console.log(obj.length); // -> undefined

let length = Object.keys(obj).length;
console.log(length);
