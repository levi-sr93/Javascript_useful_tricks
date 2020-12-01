let getUserData = async (user) =>
  await fetch(`https://api.github.com/users/${user}`);

let time = (func, ...args) => {
  console.time("Time to Execute");
  let result = func(...args);
  console.timeEnd("Time to Execute");
  return result;
};

time(() => getUserData('tom'));
