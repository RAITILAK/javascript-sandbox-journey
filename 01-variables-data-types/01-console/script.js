console.log("Hello, World!");
console.log("Welcome to JavaScript programming!");
console.log("This is a simple console log example.");

console.log(100);

console.log(20, "hola", true);

const x = 100;

console.log(x);

console.error("Alert");

console.warn("This is a warning message!");

console.table({ name: "Rai", email: "rai@123.com" });

console.group("simple group");
const xr = 100;
console.log(xr);
console.error("Alert");
console.groupEnd();

const styles = `padding:10px;
              background-color: #f0f0f0;
              color:green`;

console.log("%cThis is a styled message", styles);
