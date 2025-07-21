// Values are stored on the stack
const name = "John";
const age = 30;

// Reference types are stored on the heap
const person = {
  name: "Brad",
  age: 40,
};

let newName = name;

newName = "Johnathan";

newName = person;

console.log(name, newName);
console.log(person, newName);
