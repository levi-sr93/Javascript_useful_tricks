let onResize = () => {
  console.log(window.innerHeight, window.innerWidth);
};
window.addEventListener("resize", onResize);


//debounce is a function, when called, can only be called a certain ammount of time has passed

//slow down the ammount of time that this event takes place
//this debounce function is a high order function ( a function that receives other function as argument)
let debounce = (fn, ms) => {
  let timeout;
  return function(){
    clearTimeout(timeout);
    timeout = setTimeout(() =>  fn(), ms);
  }
}

//will console.log only with half of a second
window.addEventListener('resize', debounce(onResize, 500));

//we can pass an event as argument to the callback function so when the event itself happens it will provide the informations about the event
let onResize = (event) => {
  console.log(event, window.innerHeight, window.innerWidth);
};

let debounce = (fn, ms) => {
  let timeout;
  return function(args){
    clearTimeout(timeout);
    timeout = setTimeout(() =>  fn(args), ms);
  }
}