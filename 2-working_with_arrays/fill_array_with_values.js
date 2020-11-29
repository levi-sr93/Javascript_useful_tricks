let numbers = [1, 2, 3, 4];

//replacing each one of the elements to a given value
let phoneNumber = '555-414-4141';
let newNumber = phoneNumber.split(''); //-> turn the string into an array
console.log(newNumber);

//spliting and removing the dashes
newNumber = phoneNumber.split('').filter(num => num !== '-');
console.log(newNumber);

//filling the array to a given value
console.log(newNumber.fill('*', 0, 3).join('')); //-> replace the first 3 elements with the * and join the numbers back to string
