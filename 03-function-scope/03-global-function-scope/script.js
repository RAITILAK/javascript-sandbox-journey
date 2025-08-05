// alert("dangerous code"); //global scope
// console.log(innerWidth); // global scope

const x = 100;
console.log(x, "global scope"); // global scope

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}
run();

if (true) {
  console.log(x, "in if block");
}
function add() {
  const x = 200; // this is a local variable and overrides the global variable x this is called shadowing
  const y = 50; //this is a local variable
  console.log(x + y);
  console.log(y);
}

// console.log(y); // ReferenceError: y is not defined as y is not defined in the global scope
add();

//global have there own scope
// functions have their own scope
// if blocks have their own scope
