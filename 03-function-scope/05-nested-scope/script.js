function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}
first();

// example
function outer() {
  let outerVar = "I'm outside!";

  function inner() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // ✅ Can access outerVar
    console.log(innerVar); // ✅ Can access innerVar
  }

  inner();
  // console.log(innerVar); ❌ Error: innerVar is not defined in this scope
}

outer();
//in this example, inner() can access outerVar because it is defined in the outer function scope, but outer() cannot access innerVar because it is defined in the inner function scope.
// This demonstrates the concept of nested scopes in JavaScript, where inner functions can access variables from their parent scopes, but not vice versa.
