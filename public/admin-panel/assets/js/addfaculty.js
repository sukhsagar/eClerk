function validate(){
    var teachername = document.getElementById("iteachername");
    var teachertype = document.getElementById("iteachertype");
    var uploadpicture = document.getElementById("iuploadpicture");
    var submitbutton = document.getElementById("isubmit");
    var canclebutton = document.getElementById("icancle");

    var formData={
        "teachername" : teachername.value,
        "teachertype" : teachertype.value,
        "uploadpicture" : uploadpicture.value
    };
    firebase.database().ref('faculity/' + teachername.value).set(formData).then(function(){
        alert("You have succesfully added teacher detail.");
    });
}
