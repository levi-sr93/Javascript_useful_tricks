//iterating over an object

let username = {
  first: 'John',
  last: 'Doe',
};

//print all the object properties
for (let u in username) {
  console.log(u);
}

//prints the propertie and corresponding value excluding the prototype.
//for ... in
for (let u in username) {
  if (username.hasOwnPropertiy(u)) {
    console.log(u, username[u]);
  }
}

//for...of
for (let u of Object.keys(username)) {
  console.log(u, username[u]);
}

//new features
//creates an array that contains the properties and corresponding value
Object.entries(username);

//creating the array and iterating over it with Object.entries and desestructuring the array
Object.entries(username).forEach(([key, value]) => console.log(key, value));
