// String

const firstName = "Sara";

const output = firstName;

console.log(output, typeof output);

// Number
const age = 22;

const outpuit2 = age;

console.log(outpuit2, typeof outpuit2);

// Boolean

const isStudent = true;

const output3 = isStudent;

console.log(output3, typeof output3);

// Null
const aptNumber = null;

const output4 = aptNumber;

console.log(output4, typeof output4);

// Undefined
// let score;
// const score = undefined;

// const output5 = score;
// console.log(object5, typeof output5);

// Symbol
const uniqueId = Symbol("id");
const output6 = uniqueId;
console.log(output6, typeof output6);

// BigInt
const n = 9999999999999999n;
const output7 = n;
console.log(output7, typeof output7);

// Refernce Types

const numbers = [1, 2, 3, 4, 5];
const person = {
  name: "John",
  age: 30,
};

function sayHello() {
  console.log("Hello");
}

const output8 = sayHello;
console.log(output8, typeof output8);
