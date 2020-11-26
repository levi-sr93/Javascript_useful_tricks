let defaultUser = {
  name: '',
  email: '',
  subscribe: true,
};

let actualUser = {
  name: 'Don',
  email: 'don@email.com',
};

let userData = Object.assign(defaultUser, actualUser);

console.log(userData);

user2 = {
  phone: '123-456-789',
};

userData = Object.assign(userData, user2);
console.log(userData);

//OBJECT SPREAD
userData = { ...actualUser, ...defaultUser }; //copy the properties of each objects and spread in the userData
console.log('with the use of spread', userData);
