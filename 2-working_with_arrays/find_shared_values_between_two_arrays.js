let men = ['Jim', 'Doug', 'Fred', 'Angie'];

let over50 = ['Angie', 'Dave', 'Jessy', 'Jim'];

//checking if there is shared value between the two arrays
let shared = men.filter(man => over50.includes(man));
console.log(shared)

//doing the same with the over50
let shared2 = over50.filter(person => men.includes(person))
console.log(shared2)