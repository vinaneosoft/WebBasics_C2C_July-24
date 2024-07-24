// extract all nodes via their ids

const firstnameNode=document.getElementById("firstname");
const lastnameNode=document.getElementById("lastname");
const ageNode=document.getElementById("age");
const mailidNode=document.getElementById("mailid");
const passwordNode=document.getElementById("password");
const errorNode1=document.getElementById("error1");
const errorNode2=document.getElementById("error2");
const errorNode3=document.getElementById("error3");
const errorNode4=document.getElementById("error4");
const errorNode5=document.getElementById("error5");

// add blur event on every node and call individual validation funciton
// extract values from nodes

firstnameNode.addEventListener("blur", ()=>validate1())
const validate1=function(){
    const firstname=firstnameNode.value;
    console.log(firstname);
    if(firstname=="")
        errorNode1.textContent="first name is required";
    //firstnameNode.placeholder="first name is required";

}
lastnameNode.addEventListener("blur", ()=>validate2())
const validate2=function(){
    const lastname=lastnameNode.value;
    console.log(lastname);
    if(lastname=="")
        errorNode2.textContent="last name is required";
}
ageNode.addEventListener("blur", ()=>validate3())
const validate3=function(){
    const age=ageNode.value;
    console.log(age);
    if(age=="")
        errorNode3.textContent="age is required";
}
mailidNode.addEventListener("blur", ()=>validate4())
const validate4=function(){
    const mailid=mailidNode.value;
    console.log(mailid);
    if(mailid=="")
        errorNode4.textContent="emailid is required";
}
passwordNode.addEventListener("blur", ()=>validate5())
const validate5=function(){
    const password=passwordNode.value;
    console.log(password);
    if(password=="")
        errorNode5.textContent="password is required";
}






function test(event){
    console.log("in test");
    event.preventDefault();
}