const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//using a for loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};
console.log(sum3());

const cart = [
  {
    id: 1,
    name: "laptop",
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    name: "mobile",
    price: 700,
    quantity: 2,
  },
  {
    id: 3,
    name: "airpods",
    price: 300,
    quantity: 2,
  },
];

const totalPrice = cart.reduce(function (accumulator, currentItem) {
  return accumulator + currentItem.price;
}, 0);

console.log(totalPrice);
