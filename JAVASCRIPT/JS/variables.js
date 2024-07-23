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
function sum(){

}


sum();
sum(34);
sum(56,78);
sum(12,34,56);
sum(45,45,34,56,89,67)