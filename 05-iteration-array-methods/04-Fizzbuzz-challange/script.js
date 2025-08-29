//fizzbuzz challange
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzBuzz"); // both divisible
    } else {
      console.log("Fizz"); // only divisible by 3
    }
  } else if (i % 5 === 0) {
    console.log("Buzz"); // only divisible by 5
  } else {
    console.log(i); // neither
  }
}
