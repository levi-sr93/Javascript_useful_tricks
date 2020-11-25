let user = {
  name: 'Greg',
  email: 'greg@email.com',
};

Object.getOwnPropertyDescriptors(user);

//make impossible to add, change, delete properties
Object.freeze(user);
Object.getOwnPropertyDescriptors(user);

delete user.name; // -> false
user.password = '123'; //-> false
Object.isFrozen(user); //-> true
