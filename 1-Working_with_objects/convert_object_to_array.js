let person = { name: 'John Doe', age: 45 };

//Returns an Array only with the properties as elements of this array
let result = Object.keys(person);
console.log(result);

//map over an array and insert into a new array the propertie and the value of the corresponding key
let arr = [];
Object.keys(person).forEach((key) => arr.push([key, person[key]]));
console.log(arr);

//other approach with Object.keys | the Map array method returns a new array. So is not needed to create a new empty one
let arrayResult = Object.keys(person).map((key) => [key, person[key]]);
console.log(arrayResult);

//Nice Approach - Convert an object into array
console.log(Object.entries(person));
