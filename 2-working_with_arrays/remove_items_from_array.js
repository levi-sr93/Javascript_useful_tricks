let numbers = [48, 29, 30];
let num = [10, 40, 70];
let numb = [20, 50, 80];
//first argument of splice is where we start of. The second is the number of items we want to remove
//if no second argument is supplied all the elements will be deleted.

numbers.splice(0, 2);
console.log(numbers);

//the splice method also return to us an array with all values that were removed
let removedValue = num.splice(1, 1);
removedValue = num.splice(0, 1, 'new item', 'another item', 'third');
console.log('return from the splice', removedValue);
console.log(num);
//splice is similar to slice method.
//but slice method creates a copy from the original array.
let removedSlice = numb.slice(1, 2);
console.log('return from the slice', removedSlice);
console.log(numb);

//turning a string to an array.
let string = 'hello world!'.split('');
console.log(string);

//removing the first and last letters
string.splice(0, 1); //-> remove the first index
string.splice(string.length - 1, 1); // -> removing the last index
console.log(string);

const ints = [3, 4, 5, 6];
let result = ints.filter(element => element > 5); // filter does not modify the original array.
console.log(result);
console.log('original array', ints);

result = ints
  .filter(element => element > 5)
  .map(el => {
    ints.splice(ints.indexOf(el), 1);
    return el;
  });

console.log(ints);

//FUNCTION TO ABSTRACT WHAT WE DID
const newInts = [3, 4, 5, 6];

function removeItems(arr, func) {
  return arr.filter(func).map(el => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

let returnedRes = removeItems(newInts, num => num > 5);
console.log('returned value from function ', returnedRes);
