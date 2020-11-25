let user = {
  name: 'John',
  address: {
    street: 'Main',
    city: 'New York',
  },
};

const property = 'name' in user;
console.log(property); // -> true

//checking in nested properties
const especificProperty = 'street' in user.address;
console.log(especificProperty); //-> true

//objects methods
const strangeBehavior = 'constructor' in user;
console.log(strangeBehavior);

console.dir({}); // -> constructor, toString - the in operator give us access to that.

//accessing only the properties that we gave to an object
const customProperties = user.hasOwnProperty('name');
console.log(customProperties);
