function validate(){
    var teacherId = document.getElementById("iteacherId");
    var teacherName = document.getElementById("iteacherName");
    var teacherType = document.getElementById("iteacherType");
    var uploadPicture = document.getElementById("iuploadPicture");
    var recentWork = document.getElementById("irecentWork");
    var message = document.getElementById("imessage");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    if(teacherId.value==="")
    {
        alert("please enter teacher Id");
        return;
    }
    if(teacherName.value==="")
    {
        alert("please enter teacher name");
        return;
    }
    if(teacherType.value==="")
    {
        alert("please enter teacher type");
        return;
    }
    if(uploadPicture.value==="")
    {
        alert("please upload teacher image");
        return;
    }
    if(recentWork.value==="")
    {
        alert("please enter teacher recent work");
        return;
    }
    if(message.value==="")
    {
        alert("please enter teacher message");
        return;
    }

    var formData={
        "teacherId" : teacherId.value,
        "teacherName" : teacherName.value,
        "teacherType" : teacherType.value,
        "uploadPicture" : uploadPicture.value,
        "recentWork" : recentWork.value,
        "message" : message.value
    };
    firebase.database().ref('faculity/' + teacherName.value).push(formData).then(function(){
        alert("You have succesfully added teacher detail.");
    });
}
