var rollNo = document.getElementById('rollno');
var password = document.getElementById('password');

function validate(){
    if(email==="" || email===undefined){
        alert("Please Enter your Roll Number.");
        return false;
    }
    if(password==="" || password===undefined){
        alert("Please Enter your Password.");
        return false;
    }
    if(rollNo==="2015CSB1002" && password==="123456"){
        document.location.href = "home.html";
    }
    return false;
}