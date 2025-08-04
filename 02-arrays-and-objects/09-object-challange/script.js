// crate an arrya of object called library, add 3 object with a property of titile,author,status.
// Title and author should be strings, status should be a another object with properties of own,reading,and read.
//  which should all be boolean values. for ll status ,set own to true and readigna and read to false
// you finished reading all of the books .Set the read value for all of them to true.
// Do not edit the initial object, set the value usinng dot notation
// Destructure the title from the first book and rename the variable to firstBook
// turn the library object into a JSON string and log it to the console

const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "1984",
    author: "George Orwell",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Set the read value for all books to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Destructure the title from the first book and rename it to firstBook

const { title: firstBook } = library[0];

// turn the library object into a JSON string and log it to the console
x = JSON.stringify(library);
console.log(x);

console.log(firstBook);
