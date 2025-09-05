//take the people array and create an array called younpeople that stores objects with only name and email properties of all the people that are 25 and under.
// the name property should have their first and last name

const people = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "+1-202-555-0172",
    age: 28,
  },
  {
    firstname: "Priya",
    lastname: "Sharma",
    email: "priya.sharma@example.com",
    phone: "+91-9876543210",
    age: 25,
  },
  {
    firstname: "Michael",
    lastname: "Smith",
    email: "michael.smith@example.com",
    phone: "+1-202-555-0136",
    age: 34,
  },
  {
    firstname: "Aarav",
    lastname: "Patel",
    email: "aarav.patel@example.com",
    phone: "+91-9988776655",
    age: 30,
  },
  {
    firstname: "Sophia",
    lastname: "Brown",
    email: "sophia.brown@example.com",
    phone: "+44-7700-900123",
    age: 27,
  },
  {
    firstname: "Liam",
    lastname: "Wilson",
    email: "liam.wilson@example.com",
    phone: "+61-400-123-456",
    age: 32,
  },
];

const younPeople = people
  .filter((person) => {
    return person.age <= 25;
  })
  .map((person) => {
    return {
      name: person.firstname + " " + person.lastname,
      email: person.email,
    };
  });
console.log(younPeople);

//add all the positive numbers in the array

const numbers = [1, -4, 12, 0, -3, 29, -150];

const sumPositive = numbers
  .filter((number) => number > 0)
  .reduce((acc, number) => acc + number, 0);
console.log(sumPositive);

//create a new array to capatalize first letter of each word of the exsisting array
const strings = ["hello", "world", "javascript", "is", "fun"];

const capitalizedStrings = strings.map((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(capitalizedStrings);

const cWord = strings.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(cWord);
