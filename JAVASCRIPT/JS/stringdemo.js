let companyName="Neosoft";
console.log(companyName);
console.log(typeof companyName); // string

let branch=new String("Rabale");
console.log(branch);
console.log(typeof branch); // object : String

//1. Strings are immutable
// not changeable
//once u create the object we can not change value of that object, instead new object gets created with changes

let uppercase=companyName.toUpperCase();
console.log(companyName);
console.log(uppercase); // new memory location


//2. if 2 literals have same value then their memory location will be same
let company="Neosoft";
console.log(companyName==company); // true when mem location same, if value same then mem location




//2. arrays are mutable
let arr=["priya", 'aasha'];
arr.sort();
console.log(arr);

// == loose checking //=== strict checking