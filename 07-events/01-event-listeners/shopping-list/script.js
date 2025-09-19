// function onClear() {
//   alert("Clear Items");
// }\

const clearBtn = document.querySelector("#clear");

function onClear() {
  const listItems = document.querySelector("ul");
  const items = listItems.querySelectorAll("li");

  items.forEach((item) => item.remove());
}

//javascript event listner

// clearBtn.onclick = function () {
//   alert("clear Items");
// };

// addEventListener()

// clearBtn.addEventListener("click", function () {
//   alert("Clear Items");
// });
clearBtn.addEventListener("click", onClear);
