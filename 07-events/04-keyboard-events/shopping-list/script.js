const itemInput = document.getElementById("item-input");

// const onKeyPress = (e) => {
//   console.log("keypress");
// };
// const onKeyUp = (e) => {
//   console.log("keyup");
// };
const onKeyDown = (e) => {
  // console.log("keyDown");

  if (e.key === "Enter") {
    alert("Enter key pressed");
  }

  if (e.repeat) {
    console.log("You are holding down the key", e.key);
  }
};

// itemInput.addEventListener("keypress", onKeyPress);
// itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
