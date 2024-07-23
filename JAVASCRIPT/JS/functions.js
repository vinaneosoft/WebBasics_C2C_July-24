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

console.log("--------------------");

let salaries=[56789,78990,45666,788999,49676,78888];
salaries.forEach(ele=>console.log(ele));
salaries.forEach((salary, index, ref)=>console.log(salary+" "+index+" "+ref));

// find out all salaries greater than 50000
const filterSalaries=salaries.filter(salary=>salary>50000);
console.log(filterSalaries);

salaries.filter(salary=>salary>50000).forEach(sal=>console.log(sal))

console.log("--------------------");
// find out first matching salary greater than 50000
const filterSalary=salaries.find(salary=>salary>50000);
console.log(filterSalary);

console.log("--------------------");
// increment everysalary by 5000 and display all new salaries
const incrSalaries=salaries.map(salary=>salary+5000);
console.log(incrSalaries);

console.log("--------------------");
// make sum of salaries

