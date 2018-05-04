function validate(){
    var name = document.getElementById("iname");
    var fathername = document.getElementById("ifathername");
    var mothername = document.getElementById("imothername");
    var rollno = document.getElementById("irollno");
    var password = document.getElementById("ipassword");
    var registrationno = document.getElementById("iregistrationno");
    var submitbutton = document.getElementById("isubmit");

    var formData={
        "Name": name.value,
        "Father Name": fathername.value,
        "Mother Name": mothername.value,
        "Roll No": rollno.value,
        "Password": password.value,
        "Registration Number": registrationno.value
    };
    firebase.database().ref('student/' + rollno.value).set(formData).then(function(){
        alert("You have succesfully created a new batch.");
    });
}


