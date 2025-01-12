const accountId = 555;
// accountId = 345; value cannot be reassigned 
console.log(accountId);
/*
- const is keyword wjich is used to declare constant variable.
- value cannot be reassigned 
*/

//----------------------------------------------------------------------------------------------

let accountName = "Kedar Jagtap"; // new way to declare the variable in javascript
console.log(accountName);
accountName = "Niraj Jannu"; // canbe reassigned
console.log(accountName); 
// let accountName = "Ganesh"; cannot be redecaled in the same scope

//------------------------------------------------------------------------------------------------

var emailId = "kedar@gmail.com" // var is the oldest way to declare the variable in javascript
console.log(emailId);
emailId = "jagtap@gmail.com";
console.log(emailId); // can be ressigned
// var emailId = "Niraj@gmail.com" can be redeclared in the same scope and hence leads to bug 
// prefer not to use var because of issue in block scope and functional scope

//------------------------------------------------------------------------------------------------

let accountPassword; // variable declaration
console.log(accountPassword); // result into undefined without initialization 

//---------------------------------------------------------------------------------------

// to print the all values in tablular structure
console.table([accountId,accountName,accountPassword,emailId]);



