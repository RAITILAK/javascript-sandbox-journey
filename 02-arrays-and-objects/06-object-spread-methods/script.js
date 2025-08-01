let x;
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
};

x = person.address.coordinates.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // Spread operator to merge objects

const obj4 = Object.assign({}, obj1, obj2); // Using Object.assign to merge objects

x = obj4;

const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
]; // array of objects

x = todos;
x = todos[0].name;

console.log(x);
