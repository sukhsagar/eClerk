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
    day = new Date();
    var d = day.getMonth();
    var formData = {
                    "teacherName" : selectTeacher.value, 
                    "date" : selectDate.value
                        }; 
    firebase.database().ref('gndu-amritsar/teacherOnLeave/' + selectDate.value + (d+1) + '2018/').push(formData).then(function(){
        alert("You have succesfully add teacher on leave detail.");
    });
                      
}