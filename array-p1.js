var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
// Banana index :1
fruits[bananaIndex] = 'Mango';
console.log(fruits);
// out last element
fruits.pop();
console.log(fruits);
// add new element in last position
fruits.push('Watermelon');
console.log(fruits);