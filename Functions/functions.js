// syntax

// function myFucntion (){

// }

function myName (){
    console.log("K");
    console.log("E");
    console.log("D");
    console.log("A");
    console.log("R");
}

// myName(); // call of function

// function with parameters
function addNumbers(num1,num2){
    //console.log(num1+num2);
}

addNumbers(2,2); // paasing arguments to function

const result = addNumbers(4,4);
//console.log(result); // undefined cause function does not return any value;

function subtractNum (num1, num2){
    let result = num1 - num2;
    return result;
     //  console.log(result); after return no any code executes
}

const subtraction = subtractNum(10,4);
//console.log(subtraction); // 6


function userLogeedIn (username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }

    return `logged in user ${username}`;
}

//console.log(userLogeedIn("Kedar"));

// function parameters with rest operator
// ...num1 this is the syntax
function addition(...num1){
    return num1;
}

console.log(addition(20,30,40)); // [ 20, 30, 40 ]

// function with object

const user = {
    username : "Kedar",
    password : "**********"
}

function objFunction(userObj){
    return `user detais is username : ${userObj.username} & password : ${userObj.password} `
}

// console.log(objFunction(user)); // user detais is username : Kedar & password : ********** 
console.log(objFunction({username : "Niraj", password : "----------"})); // another way

