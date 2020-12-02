const result1 = .3 === .1 + .2;
console.log(result1) // -> false

let result2 = .1 + .2;
console.log(result2) //-> 0.3000000000000....

result2 = Number((.1 + .2).toFixed(2));
console.log(result2) // -> 0.3

let result3 = (.1 + .2) - .3
console.log(result3 < Number.EPSILON)
var equal = ((.1 + .2) - 3) < Number.EPSILON;
console.log(equal)

let result4 = Math.round((.1 + .2) * 10) / 10;
console.log(result4)
 