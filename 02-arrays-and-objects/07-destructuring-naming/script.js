const firstName = "john";
const lastName = "Does";
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};
console.log(person);

// Destructuring

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id,
  title,
  user: { name },
} = todo;

console.log(name);

//Destructuring Arrays

const numbers = [23, 33, 45, 77, 88];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
