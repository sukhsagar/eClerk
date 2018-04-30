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
    var today = new Date().toJSON();
    var formData = {
                    "teachername" : selectteacher.value, 
                    }; 
    var formData = {
                        "date" : selectdate.value, 
                    };                   
}