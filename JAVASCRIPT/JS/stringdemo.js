// case sensitive comparision
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

//3. if 2 string objects have same value, still their memory locations will be difft
let companyBranch=new String("Rabale");
console.log(branch==companyBranch); // false
console.log(branch.localeCompare(companyBranch)); //  0 if both are equal
console.log(branch.valueOf()==companyBranch.valueOf()); 

//2. arrays are mutable
let arr=["priya", 'aasha'];
arr.sort();
console.log(arr);

// == loose checking //=== strict checking : any value if u want to compare

let obj1={
    id:678,
    name:"hari"
}

let obj2={
    id:678,
    name:"hari"
}
console.log(obj1==obj2);
