function validate(){
    var name = document.getElementById("iname");
    var fathername = document.getElementById("ifathername");
    var mothername = document.getElementById("imothername");
    var rollno = document.getElementById("irollno");
    var password = document.getElementById("ipassword");
    var registrationno = document.getElementById("iregistrationno");
    var submitbutton = document.getElementById("isubmit");
    var stuClass = document.getElementById("inputState");
    var formData={
        "name": name.value,
        "rollNo": rollno.value,
        "password": password.value,
        "registrationNumber": registrationno.value,
        "class": stuClass.selectedIndex,
        "personalDetail":{
            "fatherName": fathername.value,
            "motherName": mothername.value
        }
    };
    firebase.database().ref('gndu-amritsar/student/' + rollno.value).set(formData).then(function(){
        alert("You have succesfully created a new batch.");
    });
}


