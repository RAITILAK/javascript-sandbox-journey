const d = new Date(10, 30, 2022, 18, 0, 0); // Year, Month, Day, Hour, Minute, Second
const hour = d.getHours(); // 0-23

if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}
console.log(hour); // 8

//nested if

if (hour < 12) {
  console.log("Good morning");
  if (hour === 6) {
    console.log("wake up, it's 6am");
  }
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}
console.log(hour); // 8
