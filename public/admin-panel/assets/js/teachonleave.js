function validate() {
    var selectteacher = document.getElementById("iselectteacher");
    var selectdate = document.getElementById("iselectdate");
    var submitbutton = document.getElementById("isubmit");
    if(selectteacher.selectedIndex=="0")
    {
        alert("please select a teacher");
        return;
    }
    if(selectdate.selectedIndex=="0")
    {
        alert("please select a date");
        return;
    }
     
           var formData = {
                    "teachername" : selectteacher.value, 
                    "date" : selectdate.value
                        }; 
    firebase.database().ref('teacheronleave/' + selectteacher.value).push(formData).then(function(){
        alert("You have succesfully add teacher on leave detail.");
    });
                      
}