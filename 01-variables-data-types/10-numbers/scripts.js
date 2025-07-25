// const num = new Number(5);
// console.log(num);

let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.valueOf();

x = num.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(x);
