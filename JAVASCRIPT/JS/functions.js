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

let salaries=[45000,23000,12000,10000,33000,23000];
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
console.log(salaries);
console.log(incrSalaries);

console.log("--------------------");
// make sum of salaries
const sum=salaries.reduce((accumulator, salary)=>accumulator+salary);
/* initial value of accumulator=0index ele 45000
  initial value of salary = 1 index ele 23000 45000+23000=68000 accumulator
   value of salary =12000 68000  12000+68000=80000 accumulator*/
console.log(sum);

const sum2=salaries.reduce((accumulator, salary)=>accumulator+salary, 1000);
/* initial value of accumulator=value we are passing, 1000
  initial value of salary = 0 index ele 45000, 1000+45000=55000 accumulator
   value of salary =23000 55000  23000+55000=78000 accumulator*/
console.log(sum2);
console.log("--------------------");
const sum3=salaries.reduce((accumulator, salary)=>{
    console.log(accumulator);
    console.log(salary);
    return accumulator+salary
});
console.log(sum3);