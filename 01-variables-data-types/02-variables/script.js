//Ways to declare variables in JavaScript
//var,let,const

let firstName = "Rai";
let lastName = "Sahab";

console.log(firstName, lastName);

let age = 22;
console.log(age);

//Naming convention
// - only letters,numbers,underscore and dollar signs
// - Can't start with a number

// Multi-word FormaTTING
// firstName = camelCase
// firnt_name = underscore
// FirstName= PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31;
console.log(age);

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4, 5];
arr.push(6);

console.log(arr);

const person = {
  name: "Rai",
};

person.name = "John";

person.email = "john@gmail.com";

console.log(person);

//Declaring multiple values at once
let a, b, c;
const d = 10,
  e = 20,
  f = 30;

console.log(d);
