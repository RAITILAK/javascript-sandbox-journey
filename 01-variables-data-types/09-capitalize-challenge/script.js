const myString = "developer";

// const newString = myString[0].toUpperCase() + myString.slice(1);
const newString1 =
  myString[0].toUpperCase() +
  myString.substring(1, myString.length).toLowerCase();

console.log(newString1);

//solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);
//solution 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(myNewString);
