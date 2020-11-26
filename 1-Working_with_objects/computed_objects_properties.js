let key = window.prompt('Set property name');

let obj = {
  [key]: 1,
};

//example with inputs

// <body>
//   <input type="text" name="username"/>
//   <input type="password" name="password"/>
// </body>

let username = document.querySelector('[name="username"]');
let password = document.querySelector('[name="password"]');

let state = {};

let onKeyup = (event) => {
  console.log(event); //-> keyboard events options
  let value = event.target.value;
  let name = event.target.name;

  state[name] = value; //if we type to username input and password it gives the corresponding computed properties and values
};

username.addEventListener('keyup', onKeyup);
password.addEventListener('keyup', onKeyup);
