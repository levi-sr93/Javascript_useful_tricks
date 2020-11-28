let name = {
  first: 'John',
  second: 'Doe'
};

let otherName = {
  first: 'Jane',
  last: 'Doe'
};

let objGivenName = {
  first: 'Cindi',
  middle: 'Bob',
  last: 'Bradley'
};
//delete the first property
delete name.first;
console.log(name);

//not deleting a given property but filtering an object property
let filteredObj = {};
let result = Object.keys(otherName)
  .filter(k => k !== 'last')
  .map(key => (filteredObj[key] = otherName[key]));
console.log(filteredObj);

//funtion to abstract what we did
function filterObj(obj, prop) {
  let filteredObj = {};
  Object.keys(obj)
    .filter(k => k !== prop)
    .map(key => (filteredObj[key] = obj[key]));
  return filteredObj;
}

console.log(
  'Filtering the object with function',
  filterObj(objGivenName, 'first')
);
