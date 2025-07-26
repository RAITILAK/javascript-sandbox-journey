let day;

day = new Date(); // Current date and time

day = day.toString(); // Converting to string

day = new Date(2021, 6, 10, 12, 20, 0); // Creating a date for July 10, 2021, at 12:20:00

day = new Date("2021-07-10T12:20:00"); // Creating a date from a string

day = Date.now(); // Getting the current timestamp in milliseconds

day = new Date("07-10-2021 12:20:00"); // Creating a date from a string in MM-DD-YYYY format
day = day.getTime(); // Getting the timestamp in milliseconds

day = new Date(1625899800000); // Creating a date from a timestamp in milliseconds)

day = Math.floor(Date.now() / 1000); // Getting the current timestamp in seconds

console.log(day, typeof day);
