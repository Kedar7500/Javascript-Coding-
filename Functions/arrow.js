// this keyword is used to refer current context

const user = {
    userName : "Kedar",
    price : 999,

    welcomeMessage : function (){
        
        console.log(`${this.userName}, welcome to website`); // this way this keyword is used to refer in current context
        console.log(this);
    } 
}

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this); // {} empty 

function myFunc (){
    userName : "Kedar";
    console.log(this.userName);
}

myFunc(); // undefined this is not wok incase of function

//--------------------------------------Arrow Function ---------------------------------------------
// basic arrow function / explicit return
const result = (num1,num2) => {
    return num1 + num2;
}

console.log(result(3,3));

// implicit return if function is of only one line
const addTwo = (num1,num2) => (num1 + num2); // return is not neccessary , {} not used
console.log(addTwo(2,2));