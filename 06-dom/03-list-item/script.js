
//Quick &Dirty
function createListItem(item) {
//   const li = `<li>${item}</li>`; wrong, li in this line is not a node its a string 

const li = document.createElement("li");

li.innerHTML =`${item}`
<button class="remove-item btrn-link btn-small">X</button>

  document.getElementById(".items").appendChild(li);
}

//Clean & Performat

createListItem("Naan");
