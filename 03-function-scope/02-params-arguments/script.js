// Function to register a user with a default parameter
// If no user is provided, it defaults to "Bot"
function registerUser(user = "Bot") {
  //   if (!user) {
  //     user = "bot";
  //   }
  return user + " is registered";
}

// console.log(user); // This will throw an error because 'user' is not defined in this scope
//correct usage
console.log(registerUser());

// Rest parameter
function sum(...numbers) {
  // This function takes any number of arguments and returns them as an array
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
  //   numbers;
}
// Example usage of the sum function with rest parameters
console.log(sum(1, 2, 3, 4, 5)); // Outputs: [1, 2, 3, 4, 5]

//objects as parameters
function loginUser(user) {
  // This function takes an object as a parameter
  return `${user.name} is logged in with email ${user.email}`;
}

const user = {
  name: "John",
  email: " john@.com",
};

console.log(loginUser(user)); // Outputs: John is logged in with email john@.com

// Arrays as parameters
function getRandomNumbers(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandomNumbers([1, 2, 3, 4, 5]); // Outputs a random number from the array
