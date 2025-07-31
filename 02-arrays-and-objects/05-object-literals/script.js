const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  hobbies: ["reading", "traveling", "gaming"],
};

x = person.name; // Accessing the name property
console.log(x);

x = person["name"]; // Accessing the name property using bracket notation
console.log(x);
x = person.address.street; // Accessing nested property
console.log(x);
x = person.hobbies; // Accessing the hobbies array
console.log(x);
// console.log(person);

person.name = "Jane Smith"; // Modifying the name property
console.log(person);

delete person.age; // Deleting the age property
console.log(person);

person.hasChildren = true; // Adding a new property

person.greet = function () {
  // Adding a method
  console.log(`Hello, my name is ${this.name}`);
};

person.greet(); // Calling the greet method

console.log(person.hasChildren);

//object literals are used to create objects in JavaScript, they allow you to group related data and functionality together.
// They are defined using curly braces {} and consist of key-value pairs.
// You can access properties using dot notation or bracket notation.
// You can also modify, add, or delete properties after the object has been created.
