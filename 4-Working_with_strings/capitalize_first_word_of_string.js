//hello world - Hello World
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

let result = capitalize("hello world");
console.log(result);

//with template strings
function capitalizeStr(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

let result2 = capitalizeStr("hey there");
console.log(result2);

//function expression to capitalize the first letter
let capitalizeFunc = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join('');
};

let result3 = capitalizeFunc('hello world')
console.log(result3)