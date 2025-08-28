//Break - it stops the loop entirely
//Continue - it skips the current iteration and continues with the next one

//Break
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking the loop at 15");
    break;
  }
  console.log(i);
}
console.log("Loop ended");

//Continue
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping the number 13. ghost");
    continue;
  }
  console.log(i);
}
