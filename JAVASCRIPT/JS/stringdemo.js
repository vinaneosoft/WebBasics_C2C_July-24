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
console.log("------------");
let  num1=78; let num2=78
console.log(num1==num2); //true
console.log("------------");
let num3="78"
console.log(num1==num3); //true // ignore type
console.log("------------");
console.log(num1===num3); //false
console.log("------------");

let obj1={
    id:678,
    name:"hari"
}

let obj2={
    id:678,
    name:"hari"
}
console.log(obj1==obj2);

const country="India is my country. I love my country"
console.log(country.length);
console.log(country.substring(0,4));
console.log(country.substring(4));
console.log(country.substring(6,3)); // 3, 6
console.log(country.substring(-6,3)); // -6 replaced with 0

console.log("--------------");
console.log(country.slice(0,4));
console.log(country.slice(4));
console.log(country.slice(6,3));  // no output
console.log(country.slice(-6,3)); // backward counting from 1
console.log(country.slice(-10,-2));
console.log(country.slice(-37,10));