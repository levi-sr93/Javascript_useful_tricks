let str = "hello world";

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i), i);
}
for(let s in str) {
  console.log(str.charAt(s))
  console.log(str[s])
}

//SImplest approach to iterate over a string
for(let s of str) {
  console.log(s)
}

//if we want to get the index
let newStr = str.split('');
console.log(newStr);

for(let [i, n] of newStr.entries()){
  console.log(n, i);
}