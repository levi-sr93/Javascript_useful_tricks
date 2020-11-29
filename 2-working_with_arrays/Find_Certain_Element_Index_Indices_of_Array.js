let people = ['John', 'Mary', 'Joe', 'John'];

//looking for a particular person on the array

let result = people.find(person => person === 'Mary');
console.log(result);

//Find method return the first element that satisfy the condition we gave to the function
people = ['John', 'Mary', 'Joe', { name: 'Joe' }, 'John'];
let objFind = people.find(person => person.name === 'Joe');
console.log('Finding a element in a object', objFind);

//findIndex  do the same but instead of return the element it returns the index
let elementIndexFind = people.findIndex(person => person === 'Mary');
console.log(elementIndexFind); //-> return only the first element that satisfy the condition

//Find Multiple indeces
function findIndexAll(arr, value) {
  let indeces = [];

  arr.forEach((element, index) => {
    if (element === value) {
      indeces.push(index);
    }
  });

  return indeces;
}

let res = findIndexAll(people, 'John');
console.log(res);
