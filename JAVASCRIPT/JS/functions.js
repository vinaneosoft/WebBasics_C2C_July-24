// annonymous functions
const fun1=function(){
    console.log("annonymous functions");
}

fun1();
const fun2=function(a){
    console.log("annonymous functions"+a);
}
fun2("Vina");

// arrow functions : => between arguments and body

const arrow1=(a)=>{
    console.log("arrow functions"+a);
}
arrow1("Vina");
// if arrow function contains single stmt in body the  {} optional
// if arrow function contains single argument then () are optional
// if arrow funciton contains single return statment and if u omit {} then never put
//return keyword, function will automatically return result
const arrow2=a=>console.log("arrow functions"+a);
arrow2("Vina");

const arrow3 = a => a.toUpperCase();

console.log(arrow3("Vina"))