age = 30; //
var age; // -> var is executed in the top of the file (Hoisting Ability). This can bring some errors.
console.log(age);

name = 'John'; // -> can not access name before initialization
let name;

email = 'john@email.com';
const email; //-> can not access email before initialization
console.log(email);

fn(); // -> this bring error

var fn = function () {};

func(); //-> this also brings error
let func = () => {};

// using the Hoisting with funcion
log();

function log() {
  console.log('John');
}

log('Jeff');

function log(name) {
  console.log(name);
}
