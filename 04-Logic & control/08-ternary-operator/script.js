//ternary operator

const age = 22;

if (age >= 19) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

//one line using ternary operator
age >= 19 ? console.log("you can vote") : console.log("you cannot vote");

//assigning a conditional value to a variable

const canIVote = age >= 19 ? "yes" : "no";
console.log(canIVote);

//multiple statement
const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

const redirect = auth
  ? (alert("Welcome to the dashboard"), "/dashboard")
  : (alert("Access Denied"), "/login");
console.log(redirect);
