let x;

const arr = [1, 2, 3, 4, 5, 77.66, 99];

arr.push(6); // Adds 6 to the end of the array
arr.pop(); // Removes the last element (6) from the array
arr.unshift(0); // Adds 0 to the beginning of the array
arr.shift(); // Removes the first element (1) from the array
arr.reverse(); // Reverses the order of the array

x = arr.includes(2); // Checks if 20 is in the array
x = arr.indexOf(12); // Finds the index of 3 in the array

// x = arr.slice(1, 3); // Returns a new array with elements from index 1 to 2
// x = arr.slice(1); // Returns a new array with elements from index 1 to the end
// x = arr.splice(1, 2); // Removes 2 elements starting from index 1 and returns them
// x = arr.splice(1); // Removes all elements starting from index 1 and returns them

// slice vs splice
//slice is used to create a new array from a portion of the original array without modifying it.
//splice is used to modify the original array by removing or adding elements.

x = arr.splice(1, 4).reverse().toString().charAt(0);
// Removes 4 elements starting from index 1, reverses the result, converts it to a string, and gets the first character
console.log(x);
