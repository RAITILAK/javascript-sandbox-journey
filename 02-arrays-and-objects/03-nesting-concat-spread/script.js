// Nesting arrays and objects
let x;
const fruits = ["apple", "banana", "cherry"];
const berries = ["blueberry", "raspberry", "strawberry"];

fruits.push(berries);
x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][2]; // "strawberry"
x = allFruits[0][3][0]; // "blueberry"
console.log(x);

console.log(fruits); // ["apple", "banana", "cherry", ["blueberry", "raspberry", "strawberry"]]

// Concatenating arrays

const carsBrands = ["Toyota", "Honda", "Ford"];
const luxuryCarsBrands = ["BMW", "Mercedes", "Audi"];

x = carsBrands.concat(luxuryCarsBrands); //concatenated array
console.log(x); // ["Toyota", "Honda", "Ford", "BMW", "Mercedes

//spread operator(...)

x = [...carsBrands, ...luxuryCarsBrands]; //spread operator
console.log(x); // ["Toyota", "Honda", "Ford", "BMW", "Mercedes", "Audi"]

//flatting arrays
const nestedArray = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(nestedArray);

x = nestedArray.flat(); // flattens the array
console.log(x); // [1, 2, 3, 4, 5, 6, 7, 8]

//static method

x = Array.isArray(nestedArray); // checks if nestedArray is an array
console.log(x); // true

x = Array.from("12345"); // converts a string to an array
console.log(x); // ['1', '2', '3', '4', '5']

//summary
//nested arrays and objects are useful for organizing complex data structures.
//concatenating arrays can be done using the concat method or the spread operator.
//the flat method can be used to flatten nested arrays into a single array.
//this allows for easier manipulation and access to the data within the arrays.
