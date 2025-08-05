// Arrow Function are a concise way to write function expressions.

// function add(a, b) {
//   return a + b;
// }

// const add = function(a, b) {}

//regular arrow function
const add = (a, b) => {
  return a + b;
};

//imnplicit return arrow function
const subtract = (a, b) => a - b; //no need for curly braces and return if it's a single expression
console.log(subtract(5, 2));

console.log(add(2, 3));

const double = (a) => a * 2; //single parameter can omit parentheses
console.log(double(4));

//retruning an object
// use parentheses to wrap the object literal
const createUser = (name, age) => ({
  name: name,
  age: age,
});

console.log(createUser);

//conclusion =these are different ways to write functions, arrow functions are more concise and have a different behavior with 'this' context.
