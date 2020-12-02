//2, 10 -> 5

const result = Math.round(Math.random() * (10 - 2) + 2) //inclusive of min and max
console.log(result)

const result2 = Math.floor(Math.random() * (10 - 2) + 2) //inclusive of min

const result3 = Math.ceil(Math.random() * (10 - 2) + 2) //inclusive of max

//abstract a function to get a random integer in range 
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

const functionResult = getRandomInt(2, 15)
console.log('random number from the function: ', functionResult)