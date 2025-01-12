
// number to string

let a = 33;
console.log(typeof a); // number

let stringNumber = String(a);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

console.log("------------------------------------------------------------------------------------");

// string to number

let num = "33";
console.log(typeof num); // string

let b = Number(num);
console.log(typeof b);// number
console.log(b); // 33

let numString = "33abc";
let c = Number(numString);
console.log(typeof c); // Number
console.log(c); // NaN

console.log("------------------------------------------------------------------------------------");

// number to boolean

let isLogged = "";
console.log(typeof isLogged); // number

let isBool = Boolean(isLogged);
console.log(typeof isBool); // boolean
console.log(isBool); // true 

// 0 => false, 2 => true, "" => false , "Kedar" => true


