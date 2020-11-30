let usernames = ['jeff', 'doug', 'john', 'john'];

//getting only the unique values
usernames.filter((name, index, array) => {
  if(array.indexOf(name) === index){
    return name; //if it is unique it returns it.
  }
})

//other way to write it.
let newUsernames = usernames.filter((name, index, array) => array.indexOf(name) === index ? name : '')
console.log(newUsernames);

//RECENT JS FEATURE ***SET***
let set = new Set([1, 2, 2, 3]);
console.log(set)

let setNames = new Set(usernames)
console.log(setNames)
console.log(Array.isArray(set)) // set is not an array

//turning set into Array
let set = [...set Set(usernames)]
console.log(set);

