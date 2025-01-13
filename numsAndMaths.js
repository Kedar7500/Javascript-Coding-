// Numbers 

const score = 100.45832;
const balance = new Number(1000);

// console.log(score) // 100
// console.log(balance) // Number : 1000
// console.log(typeof score); // number
// console.log(typeof balance); // objcet 

// // methods to work with numbers

// console.log(score.toString().length); // 100 converts the no into string
// console.log(score.toFixed(2)) // 100.00 returns a string upto specifies decimal 

// const otherNum = 123.456789
// console.log(otherNum.toPrecision(4)); // (4) => 123.5, (3) => 123 

// const local = 100000000;
// console.log(local.toLocaleString('en-IN'));//  10,00,00,000


//---------------------------------------Working with Maths-----------------------------------------

console.log(typeof Math); // object
console.log(Math.abs(-4)); // (-4) => 4 , (4) => 4
console.log(Math.round(4.2)) // (4.2) => 4, (4.6) => 5
console.log(Math.ceil(4.1)) // 5 give the uppermost value
console.log(Math.floor(4.9)) // 4 give the lowermost value
console.log(Math.min(4,9,12,2)); // 2
console.log(Math.max(45,67,467,1)); // 467