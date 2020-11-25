let user = {
  name: 'jeff',
  email: 'jeff@email.com',
};

Object.getOwnPropertyDescriptors(user); //-> return all that is possible to do with these objects

//prevent Extensions
Object.preventExtensions(user);

//trying to add new property to object will no allow
user.password = 'jeff111'; //object will stay the same.

//but we can still delete
delete user.name;

//checking if the object is extensible
Object.isExtensible(user);
