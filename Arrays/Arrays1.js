// Array

// // declaration of array
const myArray = [0,1,2,3,4,5, true, "Kedar"]; //  it can be collection of multiple items with different datatype
const newArray = new Array(1,2,3,4); // it is resizable
const books = ["Mahabharat", "Ramayan", "Shrimanyogi"];
console.log(typeof myArray); // object

// accessing elemtes by using index
console.log(myArray[0]); // 0 
console.log(myArray[6]); // true


// Array Methods

myArray.push(6); // adding new elemenmt in array
console.log(myArray); // [ 0, 1, 2, 3, 4, 5, true, 'Kedar', 6 ]

myArray.pop() // remove last valuie from array 
console.log(myArray); // [ 0, 1, 2, 3, 4, 5, true, 'Kedar' ]

myArray.unshift(9); // adding element at the start of array
console.log(myArray); // [ 9, 0, 1, 2, 3, 4, 5, true, 'Kedar' ]

myArray.shift(); // removing element from the start of array
console.log(myArray); // [ 0, 1, 2, 3, 4, 5, true, 'Kedar' ]

console.log(myArray.includes(9)); // false returns bool value checks is value contains in array or not

console.log(myArray.indexOf(1)); // 1 returns index of specifies element 

const array1 = [10,20,30,40,50,60];
console.log(array1); // [ 10, 20, 30, 40, 50, 60 ]

const array2 = array1.slice(1,3); // from index 1 to 2 not including 3
console.log(array2); // [20,30] 

const array3 = array1.splice(1,3); // removes separate array of index 1 to 3 
// and oringinal array remains with remaining element

console.log(array1); // [ 10, 50, 60 ]
console.log(array3); // [ 20, 30, 40 ]


