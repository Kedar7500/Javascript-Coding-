// string declaration 

const name = 'Kedar'; // string literal (primitive);
const surname = "Jagtap";
const gameName = new String ("Adventure"); // using rare 

console.log(typeof surname); // string
console.log(typeof gameName); // object

const newString = name + surname; // oldest way of string concatenation 

const fullName = `hello world i am ${name} ${surname}`; 
// called as string interpolation using bactic symbol
// best way to declare string concatenation
console.log(fullName); // hello world i am Kedar Jagtap


// string methods to work with string

console.log(gameName.toLowerCase()); // adventure
console.log(gameName.toUpperCase()); // ADVENTURE
console.log(gameName.charAt(2)); // v
console.log(gameName.indexOf('v')); // 2


const sub = gameName.substring(0,4) // takes substring from 0 to index 3
console.log(sub); // Adve

const anotherStr = gameName.slice(0,4)
console.log(anotherStr);// Adve

const str1 = "  Raigad ";
console.log(str1);//  Raigad as it is including space
console.log(str1.trim()); // Raigad by removing space

const str2 = 'I am Kedar Jagtap';
console.log(str2.replace('Kedar','Pankaj')); // I am Pankaj Jagtap

console.log(str2.includes('Kedar')); // return true

const str3 = 'I-am-Kedar-Jagtap';
const splitStr = str3.split('-'); // Split using '-'
console.log(splitStr);// Output: ['I', 'am', 'Kedar', 'Jagtap']
console.log(splitStr[0]); // 'I'
console.log(splitStr[3]); // 'Jagtap'
// split the string into substring by specified separator and returns as an array







