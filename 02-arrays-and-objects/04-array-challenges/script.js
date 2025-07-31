// create an array which has no 1-5, then mutates the array and turn that into 6-0
//turn this=[1,2,3,4,5] into this=[6,5,4,3,2,1,0]

let x;
let arr = [1, 2, 3, 4, 5];

x = arr.push(6); // add 6 to the end of the array
console.log(arr);
x = arr.unshift(0); // add 0 to the beginning of the array
console.log(arr);

x = arr.reverse(); // reverse the order of the array
console.log(arr);

//combine arr1 and arr2 into a new array called arr3 with thefollowing elemtns
// arr1 = [1, 2, 3,4,5], arr2=[5,6,7,8,9,10]
//get rid of number 5 as both arr hasve the same number

//solution 1
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];

arr2.shift();

let arr3 = arr1.concat(arr2); // combine arr1 and arr2
console.log(arr3);

//solution 2
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [5, 6, 7, 8, 9, 10];
const arr6 = [...arr4, ...arr5];
arr6.splice(4, 1); // remove the 5 from the combined array
console.log(arr6); // output the new array without 5
