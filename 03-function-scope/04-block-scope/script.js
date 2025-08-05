//block level scope

const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
} // this works because y is defined in the block scope

// console.log(x + y); // this will throw an error because y is not defined outside the block scope

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // this will throw an error because i is not defined outside the for loop block

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(a); // this will throw an error because a is not defined outside the block scope
// console.log(b); // this will throw an error because b is not defined outside the block scope
console.log(c); // this works because c is defined with var, which has function scope

function test() {
  var d = 100; // function scope
  console.log(d);
}
test(); // this works because d is defined within the function scope
// console.log(d); // this will throw an error because d is not defined outside the function

//conclusion
// Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are defined in.
// Variables declared with var are function-scoped, meaning they are accessible within the entire function they are defined in, or globally if defined outside of any function.
// This is why using let and const is generally preferred for block-level scoping, while var is used for function-level scoping.
// Using let and const helps prevent accidental variable shadowing and makes the code more predictable.
// Using var can lead to unexpected behavior, especially in loops and conditional blocks, as it does not respect block scope.
// Therefore, it is recommended to use let and const for variable declarations in modern JavaScript.
