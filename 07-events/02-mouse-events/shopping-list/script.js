// Select the h1 element
const logo = document.querySelector("#h1");

// Debugging: check if it's selected
console.log("Logo element:", logo);

// Single click handler
const onClick = () => {
  console.log("🖱️ Single Click detected");
  logo.style.color = "red";
};

// Double click handler
const onDoubleClick = () => {
  console.log("🖱️ Double Click detected");
  document.body.style.backgroundColor = "lightblue";
};

// Attach listeners
logo.addEventListener("click", onClick);
logo.addEventListener("dblclick", onDoubleClick);

console.log("✅ Event listeners attached for click and dblclick");
