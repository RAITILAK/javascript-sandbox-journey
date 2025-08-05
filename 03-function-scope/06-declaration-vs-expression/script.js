//declaration vs expression

//function declaration
function addDollarSign(value) {
  return `$` + value;
}
console.log(addDollarSign(100)); // $100

//function expression
const addPlusSign = function (value) {
  return `+` + value;
};

console.log(addPlusSign(200)); // +200

//declaration means that the function is defined in a way that it can be called before its definition
//expression means that the function is defined as a value and cannot be called before its definition

//declaration is hoisted, meaning it can be called before its definition
//hoisting means that the function declaration is moved to the top of its scope during the compilation phase
//hoisting process runs before the code is executed, allowing the function to be called before it is defined in the code
