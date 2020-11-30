//[1, 2, 3, 4, 5]

//programaticaly create the above array
let range = Array.from({length: 5}, (value, index) => index + 1); //we can change the size or patterns in array (length: 10, index * 20)
console.log(range);
