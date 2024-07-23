var company;
var compnay;
company="neosoft";
console.log(typeof company);
company=3456;
document.write(typeof company);
company=true
document.write("<b>"+typeof company+"</b>");

let clocation;
//let location;

const pie=3.142;
//const pie=3.142;

function loop(){
    /* if var variables declared anywhere inside function, they always have functional scope */
   for(var i=1;i<=5;i++){
    console.log(i);
   }
   console.log("outside"+i);
}
//console.log(i);
loop();

function loop2(){
    /* let variables have block scope, where they are declared   */
   for(let i=1;i<=5;i++){
    console.log(i);
   }
   //console.log("outside"+i);
}
loop2();

function add(num1,num2){
    return num1+num2
}

const res=add(34,56);
console.log(res);

function sum(...nums){
    let s=0;
    for(let ele of nums){
        s=s+ele
    }
    return s;
}

document.write("<ol>")
document.write("<li>"+sum()+"</li>");
document.write("<li>"+sum(34)+"</li>");
document.write("<li>"+sum(56,78)+"</li>");
document.write("<li>"+sum(12,34,56)+"</li>");
document.write("<li>"+sum(45,45,34,56,89,67)+"</li>");
document.write("</ol>")

let ar=[45,67,7,7,88];
console.log(sum(...ar));

let ar2=[...ar, 45,678];
console.log(ar2);