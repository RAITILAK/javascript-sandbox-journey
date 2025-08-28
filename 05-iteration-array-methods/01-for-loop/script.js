//FOR loop

// for([initialization]; [condition]; [final-expression]) {
//     // code to be executed
// }
//Initial expression - initializes a variable/counter
//Condition - defines the condition for running the loop as log as it is met or until the condition is false
//Final expression - updates the counter after each iteration
//Code to be executed - the code that will be executed for each iteration of the loop

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("7 is my favorite number");
  } else {
    console.log("Number " + i);
  }
}

//Nest loops
for (let i = 1; i <= 10; i++) {
  console.log("Outer loop: " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

//for loop through array

const name = ["John", "Jane", "Jack", "Jill", "Jerry"];

for (let i = 0; i < name.length; i++) {
  if (name[i] === "Jack") {
    console.log("Hello Jack");
  } else {
    console.log(name[i]);
  }
}
