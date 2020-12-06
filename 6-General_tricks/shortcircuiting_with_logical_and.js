{
  /* <body>
  <h1 style="display: none">Logged in!</h1>
</body>; */
}

//conditionally showing based on the loggedIn variable;

let h1 = document.querySelector('h1');
let loggedIn = true;

if (loggedIn) {
  h1.style.display = 'block';
}

//logical AND operator or shorcircuiting
loggedIn && (h1.style.display = 'block');
