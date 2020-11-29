//shallow copy / clone an array

let fruits = ['apple', 'banana'];
let originalFruits = ['apple', 'banana'];
let newFruits = fruits;
let shallowCopyFruits = fruits;

newFruits.push('cherry'); // -> add cherry to the end of the array (mutate the array)
console.log('Initial Fruits after push', fruits); // -> push changed the original array
console.log(newFruits);

shallowCopyFruits = originalFruits.slice(0); //slice method is one way to shallow copy an array
shallowCopyFruits.push('cherry');
console.log('after slice array', originalFruits);
console.log(shallowCopyFruits);

// Shallow copy an array with concat
let newFruitsConcat = [].concat(originalFruits);
newFruitsConcat.push('cherry');
console.log('Original Fruits after Concat', originalFruits);
console.log(newFruitsConcat);

//MOST POWERFULL WAY TO COPY AN ARRAY -> SPREAD OPERATOR (ES6)!!!
let newFruitsSpread = [...originalFruits, 'cherry'];
console.log('Original Fruits after Spread', originalFruits);
console.log(newFruitsSpread);
