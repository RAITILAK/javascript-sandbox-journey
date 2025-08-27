//Falsy Values: false, 0, "", null, undefined, NaN

//Truthy Values: All values that are not falsy
//true
//'0' (0 in a string)
// ' ' (space in a string)
// 'false' (false in a string)
//[] (empty array)
//{} (empty object)
//function(){} (empty function)

const x = 1;

if (x) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
console.log(Boolean(x)); // false
