const logo = document.querySelector("img");

function onClick(e) {
  // console.log(e);
  // console.log(e.target);
  // e.target.style.backgroundColor = "red";
  // console.log(e.type);
  // console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);
}

logo.addEventListener("click", onClick);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
-`preventDefault()` - A method that prevents the default action of the event (e.g. following a link)
*/
