var name = document.getElementById('name');
var password = document.getElementById('password');

function signin(){
    if(name.value==="" || name===undefined){
        alert("Please Enter your Name.");
        return false;
    }
    if(password.value==="" || password.value===undefined){
        alert("Please Enter your Password.");
        return false;
    }
    if(name.value==="Swaran Singh" && password.value==="123456"){
        document.location.href = "../../home.html";
        return false;
    }else if(name.value!="2015CSB1002"){
        alert("Please enter correct Name");
        return false;
    }else if(password.value!="123456"){
        alert("Please enter correct Password.");
        return false;
    }
    return false;
}