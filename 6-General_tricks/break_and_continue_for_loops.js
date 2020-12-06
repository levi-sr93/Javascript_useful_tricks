let users = [
  { name: 'Don', Country: 'England' },
  { name: 'Vladmir', country: 'Russia' },
  { name: 'Maria', country: 'Spain' }
];

//iterating over the array of objects
for (let user of users) {
  console.log('For of...', user);
}

users.map(user => console.log('Map...', user));

let russianUser;
for (let user of users) {
  console.log('For of...', user);
  if (user.country === 'Russia') {
    russianUser = user;
    break;
  }
}

for (let user of users) {
  if (user.name === 'Vladmir') continue;
  console.log(user); // only shows Don and Maria
}

let newUsers = [];
for (let user of users) {
  if (user.name === 'Vladmir') continue;
  console.log(user); // only shows Don and Maria
  newUsers.push(user);
  console.log(newUsers);
}
