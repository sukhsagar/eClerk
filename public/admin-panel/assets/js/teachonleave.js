function validate() {
    var selectTeacher = document.getElementById("iselectTeacher");
    var selectDate = document.getElementById("iselectDate");
    var submitButton = document.getElementById("isubmit");
    if(selectTeacher.selectedIndex=="0")
    {
        alert("please select a teacher");
        return;
    }
    if(selectDate.selectedIndex=="0")
    {
        alert("please select a date");
        return;
    }
     
           var formData = {
                    "teacherName" : selectTeacher.value, 
                    "date" : selectDate.value
                        }; 
    firebase.database().ref('teacheronleave/' + selectTeacher.value).push(formData).then(function(){
        alert("You have succesfully add teacher on leave detail.");
    });
                      
}