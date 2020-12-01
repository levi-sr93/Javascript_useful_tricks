<body>
  <button>Submit</button>
</body>;

//LOGIC THAT ALLOW TO ONLY BE CALLED ONCE
let once = (fn, ...args) => {
  let called = false;

  return function () {
    if (!called) {
      called = true;
      return fn(...args); //spread operator
    }
  };
};

//FUNCTION THAT CAN BE CALLED ONLY ONCE
let onclick = (text, time) => console.log(`${text} at ${time}`);

let button = document.querySelector("button");
button.addEventListener(
  "click",
  once(onclick, "Form Submitted", new Date(Date.now()))
);
