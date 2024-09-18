
let fruits = ["apple", "banana", "cherry"];


let longFruits = fruits.filter(fruit => fruit.length > 5);

let result = longFruits.join(',');

console.log(result);
