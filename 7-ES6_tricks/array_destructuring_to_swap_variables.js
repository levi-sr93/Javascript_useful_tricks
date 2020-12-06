let nums = [1, 2, 3, 3.4];

// let one = nums[0];
// console.log(one);

// destructuring -> to create new variables
let [one, two, three, decimal] = nums;

console.log(one);
console.log(two);
console.log(three);
console.log(decimal);

//real example of array destructuring
let name = 'doug@email.com';
let email = 'doug';

//first construct an array from which to desestructure
//then rename th vales
[email, name] = [name, email];
console.log(email);
console.log(name);
