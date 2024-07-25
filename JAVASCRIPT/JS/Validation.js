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
    errorNode1.textContent=""
    const firstname=firstnameNode.value;
    console.log(firstname);
    if(firstname=="")
        errorNode1.textContent="first name is required";
    else if(firstname.length<2)
        errorNode1.textContent="Please enter valid name";
    //firstnameNode.placeholder="first name is required";
}
lastnameNode.addEventListener("blur", ()=>validate2())
const validate2=function(){
    errorNode2.textContent=""
    const lastname=lastnameNode.value;
    console.log(lastname);
    if(lastname=="")
        errorNode2.textContent="last name is required";
    else if(lastname.length>20)
        errorNode2.textContent="Please enter valid last name";
}
ageNode.addEventListener("blur", ()=>validate3())
const validate3=function(){
    errorNode3.textContent=""
    const age=ageNode.value;
    console.log(age);
    if(age=="")
        errorNode3.textContent="age is required";
    else if(age<12 || age>40){
        errorNode3.textContent="age must be between 12 to 40";
    }
}
mailidNode.addEventListener("blur", ()=>validate4())
const validate4=function(){
    errorNode4.textContent=""
    const mailid=mailidNode.value;
    console.log(mailid);
    if(mailid=="")
        errorNode4.textContent="emailid is required";
    else if(!mailid.includes("@") || mailid.startsWith("@") || mailid.endsWith("@") || mailid.endsWith(".") || mailid.startsWith("."))
        errorNode4.textContent="Please enter valid email id";
}
passwordNode.addEventListener("blur", ()=>validate5())
const validate5=function(){
    errorNode5.textContent=""
    const password=passwordNode.value;
    console.log(password);
    if(password=="")
        errorNode5.textContent="password is required";
}

function test(event){
    validate1();
    validate2();
    validate3();
    validate4();
}