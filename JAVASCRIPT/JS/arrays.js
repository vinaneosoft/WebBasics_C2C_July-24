//arrays are mutable
let arr1=["priya", 'aasha'];
arr1.sort();
console.log(arr1);

let arr2=["priya", 'aasha',56,true, "Kripa",6789909];
console.log(arr2);
arr2.push(45000);
console.log(arr2);

let arr3=new Array();
console.log(arr3.length);
arr3.push(45000);
console.log(arr3);

let arr4=new Array(3);
console.log(arr4.length);
arr4.push(45000);
console.log(arr4);
arr4.unshift(48000);
arr4[1]=78000
console.log(arr4);

let arr5=new Array(5,6);
console.log(arr5.length);

let arr6=new Array("hi");
console.log(arr6.length);