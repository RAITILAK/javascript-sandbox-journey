// Immediately Invoked Function Expression (IIFE) to create a local scope
// This prevents the variable 'user' from being accessible outside this function scope

// const user = "john";

(function () {
  const user = "Doe";
  console.log(user);
})();

(function (name) {
  console.log(`Hello, ${name}`);
})("Rai");

//conclusion: The variable 'user' inside the IIFE is not accessible outside of it, demonstrating function scope.
//iife are often used to avoid polluting the global scope and to encapsulate code.
//iife are used to create a private scope for variables and functions, preventing them from being accessed globally.
// it avoid

//the user variable in the otherscript.js is not affected by the user variable in this script.
// The user variable in this script is scoped to the IIFE and does not conflict with the global variable in otherscript.js.
//but if iife was not used, the user variable would be in the global scope and could conflict with other scripts.
// The user variable in otherscript.js is still accessible globally, demonstrating the difference in scope.
