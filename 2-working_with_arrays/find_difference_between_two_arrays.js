let array1 = ['fred', 'doug', 'amy', 'angie', 'amy'];
let array2 = ['fred', 'doug', 'joe'];

//checking the shared values between the two arrays
let result = array1.filter(el => array2.includes(el));
console.log(result)

//checking the values that are not shared between the two arrays
let result2 = array1.filter(el => !array2.includes(el));
console.log(result2);

//in case of the array have repeated values and we dont want to include in the filtered
array1.push('amy')
console.log(array1)

let result3 = [...new Set(array1)].filter(el => !array2.includes(el));
console.log(result3)