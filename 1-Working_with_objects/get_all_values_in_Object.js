let name = {
  first: 'John',

  last: 'Doe',

  age: 40
};

//get all properties in object
let values = Object.keys(name);
console.log(values); //-> return an array with the property names -> ['first', 'last', 'age']

values = Object.keys(name).map(key => name[key]); //-> get all the corresponding values of the keys from the obj.
console.log(values);

//getting all the corresponding values
values = Object.values(name);
console.log(values);
