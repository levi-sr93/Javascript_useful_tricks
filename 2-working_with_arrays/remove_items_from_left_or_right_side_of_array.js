let nums = [23, 984, 239, 90];

//removing from the left side
let removedFromLeft = nums.slice(0, 3);
console.log(removedFromLeft) // return an array with the values that were removed.

//removing from the right side
let removeFromRight = nums.slice(2) //remove the first two elements
console.log(removeFromRight)  

console.log(nums) // slice doesnt change the original array

//getting nth element of an array
let getNthItem = (arr, num) => arr.slice(num - 1, num)[0];
let result = getNthItem(nums, 3)
console.log(result)


function offsetArray(arr, offset) {
  return [arr.slice(offset), arr.slice(0, offset)];
}
let offsetResult = offsetArray([1, 2, 3, 4], 2);
console.log(offsetResult);

 
