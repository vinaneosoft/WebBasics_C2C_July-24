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
    if(firstname==""){
        errorNode1.textContent="first name is required";
        return false;
    }
    else if(firstname.length<2){
        errorNode1.textContent="Please enter valid name";
        return false;
    }
    else if(!firstname.match("^[A-Za-z ]*$")) {
        errorNode1.textContent="Please enter only characters";
        return false;
    }
    else{
        return true;
    }
    // pattern matching here : use match function of string API  [A-Za-z ]*
    //firstnameNode.placeholder="first name is required";
}
lastnameNode.addEventListener("blur", ()=>validate2())
const validate2=function(){
    errorNode2.textContent=""
    const lastname=lastnameNode.value;
    console.log(lastname);
    if(lastname==""){
        errorNode2.textContent="last name is required";
        return false;
    }
    else if(lastname.length>20){
        errorNode2.textContent="Please enter valid last name";
        return false;
    }
    else{
        return true;
    }
       // pattern matching here : use match function of string API  [A-Za-z ]*
}
ageNode.addEventListener("blur", ()=>validate3())
const validate3=function(){
    errorNode3.textContent=""
    const age=ageNode.value;
    console.log(age);
    if(age==""){
        errorNode3.textContent="age is required";
        return false;
    }
    else if(age<12 || age>40){
        errorNode3.textContent="age must be between 12 to 40";
        return false;
    }
    else{
        return true;
    }
}
mailidNode.addEventListener("blur", ()=>validate4())
const validate4=function(){
    errorNode4.textContent=""
    const mailid=mailidNode.value;
    console.log(mailid);
    if(mailid==""){
        errorNode4.textContent="emailid is required";
        return false;
    }
    else if(!mailid.includes("@") || mailid.startsWith("@") || mailid.endsWith("@") || mailid.endsWith(".") || mailid.startsWith("."))
       {
        errorNode4.textContent="Please enter valid email id";
        return false;
    }
    else{
        return true;
    }
       
    // do pattern matching for email
}
passwordNode.addEventListener("blur", ()=>validate5())
const passPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\?]).{6,12}";
const regExp=new RegExp(passPattern);
const validate5=function(){
    errorNode5.textContent=""
    const password=passwordNode.value;
    console.log(password);
    if(password==""){
        errorNode5.textContent="password is required";
        return false;
    }
        
    else if(!regExp.test(password)){
        errorNode5.textContent="password must contain atleast 1 small letter, capital letter, digit, symbol[]. password must be 6 to 12 chars long";
        return false;
    }
    else{
        return true;
    }
}
function validateAll(){
   // if all fields are valid then we will return true else we will return false
   const r1=validate1();
   const r2=validate2();
   const r3=validate3();
   const r4=validate4();
   const r5=validate5();
   return  r1 && r2 && r3 && r4 && r5
}