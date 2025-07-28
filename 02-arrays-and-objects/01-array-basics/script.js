let x;
const numbers = [1, 2, 3, 4, 5]; // Array Literal

const fruits = new Array("apple", "banana", "cherry"); // Array Constructor

const mixed = [1, "banana", true, null]; // Mixed array with different data types

x = numbers[0]; // Accessing the first element
x = numbers[1] + numbers[3]; // Accessing the second and fourth elements and adding them

x = `My favorite fruit is ${fruits[1]}`; // Using template literals to include a string with an array element

x = numbers.length; // Getting the length of the numbers array

fruits[1] = "orange"; // Changing the second element of the fruits array
fruits.length = 5; // Setting the length of the fruits array to 5, which will add undefined elements

fruits[fruits.length] = "grape"; // Adding a new element at the end of the fruits array

console.log(fruits);
