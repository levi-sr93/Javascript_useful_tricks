let names = ['Bill', 'Fred', 'John'];
let lastName = names[2];
console.log(lastName) // --> John

names = ['Bill', 'Fred', 'Doug', 'John'];
lastName = names[2];
console.log(lastName) // --> Doug 

//actually getting the last element of an array.
lastName = names[names.length -1];
console.log(lastName)

names = ['Bill', 'Fred', 'Doug', 'John', 'Angie'];
lastName = names[names.length - 1];
console.log(lastName)

//getting everything before the last item
let beforeLastName = names.slice(0, names.length - 1);
console.log(beforeLastName)

names = ['Bill', 'Fred', 'Doug', 'Jessica', 'John', 'Angie'];
let beforeLastItem2 = names.slice(0, -1);
console.log(beforeLastItem2)