function getUserData() {
  let name = 'John';
  let email = 'john@email.com';
  let password = 'asdfg';

  return {
    name: name,
    email: email
  };
}

console.log(getUserData());

let newGetUserData = (function () {
  let name = 'John';
  let email = 'john@email.com';
  let password = 'asdfg';

  return {
    name: name,
    email: email
  };
})();

newGetUserData;

//same function but with new features sintax
let newGetUserData = () => {
  let name = 'John';
  let email = 'john@email.com';
  let password = 'asdfg';

  return {
    name,
    email
  };
};
