function validate(){
    var batch = document.getElementById("ibatch");
    var name = document.getElementById("iname");
    var fathername = document.getElementById("ifathername");
    var mothername = document.getElementById("imothername");
    var rollno = document.getElementById("irollno");
    var password = document.getElementById("ipassword");
    var registrationno = document.getElementById("iregistrationno");
    var submitbutton = document.getElementById("isubmit");
    var stuClass = document.getElementById("inputState");
    
    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(fathername.value==="")
    {
        alert("please enter fathername");
        return;
    }
    if(mothername.value==="")
    {
        alert("please enter mothername");
        return;
    }
    if(rollno.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(password.value==="")
    {
        alert("please enter password");
        return;
    }
    if(registrationno.value==="")
    {
        alert("please enter registration no");
        return;
    }
    var formData={
        "name": name.value,
        "rollNo": rollno.value,
        "password": password.value,
        "registrationNumber": registrationno.value,
        "batch": batch.value,
        "personalDetail":{
            "fatherName": fathername.value,
            "motherName": mothername.value
        }
    };
    firebase.database().ref('gndu-amritsar/student/' + rollno.value).set(formData).then(function(){
        alert("You have succesfully created a new batch.");
    });
}


