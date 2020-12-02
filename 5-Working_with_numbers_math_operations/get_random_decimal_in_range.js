const result = Math.random() * (10 - 2) + 2;

console.log(result)

function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

let functionResult = getRandomDecimal(2, 10);
console.log(functionResult)