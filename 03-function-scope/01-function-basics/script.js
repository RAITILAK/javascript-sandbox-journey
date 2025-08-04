function sayHello() {
  console.log("Hello, World!");
}

sayHello();
// This function logs "Hello, World!" to the console when called.

//there is a diifference betweenparameter and argument
function add(num1, num2) {
  console.log(num1 + num2);
} // this is a function declaration with parameters num1 and num2

add(5, 10); // This will log 15, where 5 and 10 are arguments passed to the function.

function subtract(num1, num2) {
  return num1 - num2; // This function returns the difference of num1 and num2
}
subtract(10, 5); // This will not be logged to the console, but it will return 5 when called.
const result = subtract(10, 5); // Here we store the result of the function call in a variable
console.log(result); // This will log 5 to the console, as it is the returned value of the function.
