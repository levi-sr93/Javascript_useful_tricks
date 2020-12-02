//1.2345 -> 1.2 example

let result = 1.2345.toFixed(2);
console.log(result) // -> 1.23 (have to convert back to number)  

let result2 = 1.2345.toPrecision(2);
console.log(result2) // to precision includes the integer + decimals (have to convert back to number)





