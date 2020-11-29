let temperatures = [72, 68, 65, undefined, 80, 0, null, undefined, NaN];

//remove the falsy value undefind
//falsy values = values wich , when converted to booleans always become false
//falsy values in JS -> '', 0, null, undefined, NaN

// if () {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

//filter convert everything to boolean if is truthy it keep on the array is falsy it filters out
let newTemps = temperatures.filter(temp => temp);
console.log(newTemps);
