let loggedIn = true;
let user = 'John';

if (loggedIn) {
  console.log(`${user} is logged in`);
} else {
  console.log('No user');
}

loggedIn ? console.log(`${user} is logged in`) : console.log('No user');

//it works without log
!loggedIn ? user + ' is logged in' : 'no user';

//we can nest ternary operators ( is not recommended )
!loggedIn ? user + ' is logged in' : 'no user' ? 'klsfj' : 'psdjsap';

//getting data from API and output the result in DOM
let api = 'https://api.myjson.com/bins/71z2m';
let body = document.querySelector('body');

fetch(api)
  .then(response => response.json())
  .then(data => outputUserInfo(data));

function outputUserInfo({ name, age, email }) {
  body.innerHTML = `
    <h1>${name}</h1>    
    <p>${age}</p>
    <p>${email ? email : 'no email'}</p>
    `;
}
