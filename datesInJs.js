// Date 

let myDate = new Date();
// console.log(typeof myDate); // object
// console.log(myDate.toString()); // Thu Jan 16 2025 09:49:20 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Thu Jan 16 2025
// console.log(myDate.toLocaleDateString()); // 16-1-2025
// console.log(myDate.toLocaleTimeString()); // 9:50:58 am
// console.log(myDate.toISOString()); // 2025-01-16T04:21:23.069Z

// let myNewDate = new Date(2025, 0 ,16)
// let myNewDate = new Date(2025, 0, 16, 5, 3); 
let myNewDate = new Date("2025-01-26");  
console.log(myNewDate.toString()); // Thu Jan 16 2025 00:00:00, Thu Jan 16 2025 05:03:00
console.log(myNewDate.toLocaleDateString()) // 16/1/2025


// TimeStamp 
let myTimeStamp = Date.now();
console.log(myTimeStamp.toString()); // in ms 1737002067784
console.log(myNewDate.getTime()); // in ms 1737849600000

let newDate = new Date();
console.log(newDate.getDay()); // 4 i.e thursday starts from 0 for sunday to 6 for saturday 
console.log(newDate.getMonth()); // 0 i.e jan starts from 0 for jan to 11 for dec
console.log(newDate.getFullYear()); // 2025 

console.log(newDate.toLocaleString('default',{
    weekday : "narrow"
})); // long - thursday, short - Thu, narrow - T


