// ||= assigns the value of the right operand to the left operand if the left operand is falsy

let a = false;
if (!a) {
  a = 20;
}

//short hand methods of above block
a = a || 10;

console.log(a);

// &&= assigns the value of the right operand to the left operand if the left operand is truthy

let b = 30;
if (b) {
  b = 50;
}

b = b && 30;

b &&= 30;

// ??= assigns the value of the right operand to the left operand if the left operand is null or undefined

let c = null;

if (c === null || c === undefined) {
  c = 40;
}

c = c ?? 40;

c ??= 40;
console.log(c);
