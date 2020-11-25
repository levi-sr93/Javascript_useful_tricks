let user = {
  name: 'John',
  email: 'john@email.com',
};

Object.getOwnPropertyDescriptors(user);

//Setting the object configuration to false.
Object.seal(user);

user.password = '123'; // -> false
delete user.name; // -> false

//checking if object is sealed.
Object.isSealed(user); //-> true
