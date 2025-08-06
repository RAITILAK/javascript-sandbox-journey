//1-create a function called getCelsius() that takes a temperature in Fahrenheit as an argument and returnb the temperature in Celsius
//2- create an arrow function called minMax() that takes an array of numbers as an argument and returns the minimum and maximum values in the array as an object with properties min and max
//3 create an iife that takes the length and width of a rectangle outputs it to the console in a message as soon as the page loads

//1
// function getCelsius(fahrenheit) {
//   const celsius = ((fahrenheit - 32) * 5) / 9; //this is the formula to convert Fahrenheit to Celsius
//   return celsius;
// }

getCelsius = (farenheit) => {
  const celsius = ((farenheit - 32) * 5) / 9;
  return celsius;
};

console.log(getCelsius(32)); // 0

//2
minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
};

console.log(minMax([2, 45, 45, 6, 5687, 8565]));

//3
(function (length, width) {
  const area = length * width;

  const output = `The area of the rectangle with length ${length} and width ${width} is ${area}.`;
  console.log(output);
})(7, 20);
