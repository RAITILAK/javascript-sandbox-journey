let output;

//get child element from the parent

const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[2];

parent.children[1].style.backgroundColor = "blue";
parent.firstElementChild.innerText = "Child One";

//get parent elemts from a child
const child = document.querySelector(".child");
output = child.parentElement;
child.parentElement.style.backgroundColor = "lightgrey";

//sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem.nextElementSibling.innerText = "HOLA AMIGO!!";

console.log(output);
