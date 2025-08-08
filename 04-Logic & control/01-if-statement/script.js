// if-statement are used to execute a block of code based on a condition

if (true) {
  console.log("This will always execute because the condition is true.");
}

if (false) {
  console.log("This will never execute because the condition is false.");
}

//operators can be used to create conditions
// < less than eg= 5 < 10 results in true
// > greater than eg= 10 > 5 results in true
// <= less than or equal to eg= 5 <= 5 results in true
// >= greater than or equal to eg= 10 >= 5 results in true
// == equal to eg= 5 == 5 results in true
// != not equal to eg= 5 != 10 results in true
// === strict equal to (checks value and type) eg= 5 === 5 results in true
// === strictly equal to (checks value and type) eg= "5" === 5 results in false
// !== strictly not equal to (checks value and type) eg= "5" !== 5 results in true

const x = 10;
const y = 9;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}
