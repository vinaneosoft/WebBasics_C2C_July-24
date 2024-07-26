
// add blur event on every node and call individual validation funciton
// extract values from nodes
$("#firstname").on("blur", ()=>validate1())
const validate1=function(){
    $("#error1").text("");
    const firstname=$("#firstname").val();
    console.log(firstname);
    if(firstname==""){
        $("#error1").text("first name is required");
        return false;
    }
    else if(firstname.length<2){
        $("#error1").text("Please enter valid name");
        return false;
    }
    else if(!firstname.match("^[A-Za-z ]*$")) {
        $("#error1").text("Please enter only characters");
        return false;
    }
    else{
        return true;
    }
}
$("#lastname").blur(()=>validate2())
const validate2=function(){
    $("#error2").text("")
    const lastname=$("#lastname").val();
    console.log(lastname);
    if(lastname==""){
        $("#error2").text("last name is required");
        return false;
    }
    else if(lastname.length>20){
        $("#error2").text("Please enter valid last name");
        return false;
    }
    else{
        return true;
    }
       // pattern matching here : use match function of string API  [A-Za-z ]*
}
$("#age").on("blur", ()=>validate3())
const validate3=function(){
    $("#error3").text("")
    const age=$("#age").val();
    console.log(age);
    if(age==""){
        $("#error3").text("age is required");
        return false;
    }
    else if(age<12 || age>40){
        $("#error3").text("age must be between 12 to 40");
        return false;
    }
    else{
        return true;
    }
}
$("#mailid").on("blur", ()=>validate4())
const validate4=function(){
    $("#error4").text("");
    const mailid=$("#mailid").val();
    console.log(mailid);
    if(mailid==""){
        $("#error4").text("emailid is required");
        return false;
    }
    else if(!mailid.includes("@") || mailid.startsWith("@") || mailid.endsWith("@") || mailid.endsWith(".") || mailid.startsWith("."))
    {
        $("#error4").text("Please enter valid email id");
        return false;
    }
    else{
        return true;
    } 
}
$("#password").on("blur", ()=>validate5())
const passPattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\?]).{6,12}";
const regExp=new RegExp(passPattern);
const validate5=function(){
    $("#error5").text("")
    const password=$("#password").val();
    console.log(password);
    if(password==""){
        $("#error5").text("password is required");
        return false;
    }
    else if(!regExp.test(password)){
        $("#error5").text("password must contain atleast 1 small letter, capital letter, digit, symbol[]. password must be 6 to 12 chars long");
        return false;
    }
    else{
        return true;
    }
}

$("#cpassword").on("blur", ()=>validate6())

const validate6=function(){
    $("#error6").text("");
    const password=$("#password").val();
    const cpassword=$("#cpassword").val();
    if(password!=cpassword){
        $("#error6").text("Password must match")
        return false;
    }
    else
        return true;
}

$("#registerForm").submit(()=>validateAll())

function validateAll(){
   // if all fields are valid then we will return true else we will return false
   const r1=validate1();
   const r2=validate2();
   const r3=validate3();
   const r4=validate4();
   const r5=validate5();
   const r6=validate6();
   return  r1 && r2 && r3 && r4 && r5 && r6
}