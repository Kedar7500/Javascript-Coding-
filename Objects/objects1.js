// singleton literals 

const user = new Object();

user.name = "Niraj";
user.age = 28;
user.email = "niraj@gmail.com";
user.address = "baramati";

console.log(user);

// you can declare object inside object

const newUser = {
     
    email : "jagtap@gmail.com",
    user1 : {
        name : "Kedar",
        age:28,
        user2 :{
            address:"Walchandnagar"
        }
    }

}

console.log(newUser.user1.name); // Kedar
console.log(newUser.user1.user2.address); // Walchandnagar


// merging two objects 
const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"a",5:"b",6:"c"};

const obj3 = Object.assign({},obj1,obj2) // assign is the method to combine two or more obj together 
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

// method to access key and values
console.log(Object.keys(user)); // [ 'name', 'age', 'email', 'address' ]
console.log(Object.values(user)); // [ 'Niraj', 28, 'niraj@gmail.com', 'baramati' ]
console.log(user.hasOwnProperty('name')); // true

