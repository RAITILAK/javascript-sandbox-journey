let x;

const name = "john";
const age = 30;
x = "Hello, My name is" + name + " and I am " + age + " years old.";

// Template literals
x = `Hello, My name is ${name} and I am ${age} years old`;

// string Properties and methods

const s = "                  hello world";

x = typeof s; // type of the string
x = s.length; // length of the string

//Access value by key
x = s[1]; // Accessing the second character

x = s.__proto__; // prototype of the string

x = s.toUpperCase(); // Convert to uppercase
x = s.toLowerCase(); // Convert to lowercase

x = s.charAt(0); // Get character at index 0

x = s.indexOf("e"); // Get index of first occurrence of 'e'

x = s.substring(0, 5); // Get substring from index 0 to 5
x = s.slice(0, 5); // Get substring from index 0 to 5 (similar to substring)

x = s.trim(); // Remove whitespace from both ends
console.log(x);
