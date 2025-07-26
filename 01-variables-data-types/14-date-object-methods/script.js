let x;

let d = new Date();

x = d.toString();

x = d.getTime(); // returns milliseconds since 1970
x = d.getFullYear(); // returns the full year
x = d.valueOf(); // returns the milliseconds since 1970
x = d.getMonth(); // returns the month (0-11)
x = d.getDate(); // returns the day of the month (1-31)
x = d.getDay(); // returns the day of the week (0-6)
x = d.getHours(); // returns the hour (0-23)
x = d.getMinutes(); // returns the minutes (0-59)
x = d.getSeconds(); // returns the seconds (0-59)
x = d.getMilliseconds(); // returns the milliseconds (0-999)

console.log(x);
