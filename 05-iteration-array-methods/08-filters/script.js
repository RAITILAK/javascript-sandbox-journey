const numbers = [1, 2, 3, 4, 56, 7, 8, 9, 1101, 11, 10, 12, 14];

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

//same with foreach
const evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

console.log(evenNumbers);
