// Object literals


const mySymbol = Symbol("key1");

const user = {
    name : "Kedar",
    "full name" : "Kedar Chandrakant Jagtap",
    age : 28,
    [mySymbol] : "myKey1",
    email : "kedar@gmail.com",
    isLoggedIn : false,
    loggedInDays : ["Monday","Wednesday"]
}

console.log(user.email);//  kedar@gmail.com
console.log(user["email"]);//  kedar@gmail.com
console.log(user[mySymbol]);// myKey1
console.log(typeof user.mySymbol); // undefined 

user.email = "jagtap@gmail.com"; // change the value of object this way
// Object.freeze(user); // you can freeze the object this way so user properties cannot changed after freeze
console.log(user);
user.email = "kedar@gmail.com"; // no chnage in user properties

user.grettings = function(){
    console.log("Hello js user");
}

console.log(user.grettings());




