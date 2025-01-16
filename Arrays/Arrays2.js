const array1 = ["india", 'america','germany',"japan"];
const array2 = ["england",'peru',"africa",'china'];

const array3 = array1.concat(array2);
console.log(array3); // ["india", 'america','germany',"japan", "england",'peru',"africa",'china']

const array4 = [...array1, ...array2]; // this is by using spread operator
console.log(array4); // // ["india", 'america','germany',"japan", "england",'peru',"africa",'china']