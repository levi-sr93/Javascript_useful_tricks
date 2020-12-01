let arr1 = [5, 6, 7, 8];
//last item returned and removed from the array
arr1.pop(); //remove the last element (8);
console.log(arr1);

//filtering thought all the array and returning only the last element the satisfy the condition
let lessThan5 = arr1.filter((element) => element > 5).pop();
console.log(lessThan5); // -> return only 7

function findLast(arr, fn) {
  return arr.filter(fn).pop();
}

let lastGreaterThan5 = findLast(arr1, (element) => element > 5);
console.log(lastGreaterThan5);

//creating an array of arrays that has the element and index in each of the arrays
let gettingArrayElements = arr1.map((element, i) => [element, i]);
console.log(gettingArrayElements);

//mapping through array and filtering out the elements that are over 5 using a function on the filter method.
function overFive(num) {
  return num > 5;
}

//this will return the last array of the array and in the end we specify that want only the index
arr1
  .map((element, index) => [element, index])
  .filter(([el, i]) => overFive(el, i))
  .pop()[1];

//abstracting this with a function
function findLastIndex(arr, fn) {
  return arr
    .map((element, index) => [element, index])
    .filter(([el, i]) => fn(el, i))
    .pop()[1];
}

let names = ['jim', 'jeff', 'bob'];

let containsJ = name => name.includes('j');
let result = findLastIndex(names, containsJ); //jeff is the last element that satisfy that criteria
console.log(result);