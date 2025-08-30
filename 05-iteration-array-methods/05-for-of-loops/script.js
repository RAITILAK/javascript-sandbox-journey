//for-of loop is used toiterate over iterable objects like arrays,strings,maps,sets,etc
//It gies you direct access to the values of the iterable,instead of the index

//for loop case
const items = ["book", "tables", "kites", "chair"];
const users = [{ name: "rai" }, { name: "son" }, { name: "steve" }];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//for-of loop
for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(users[0].name);
}
