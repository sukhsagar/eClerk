function validate(){
    var teacherName = document.getElementById("iteachername");
    var teacherType = document.getElementById("iteachertype");
    var uploadPicture = document.getElementById("iuploadpicture");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    var formData={
        "teacherName" : teacherName.value,
        "teacherType" : teacherType.value,
        "uploadPicture" : uploadPicture.value
    };
    firebase.database().ref('faculity/' + teacherName.value).push(formData).then(function(){
        alert("You have succesfully added teacher detail.");
    });
}
