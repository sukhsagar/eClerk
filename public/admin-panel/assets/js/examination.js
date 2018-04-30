function validate() {
    var registrationno = document.getElementById("iregistrationno");
    var rollno = document.getElementById("irollno");
    var name = document.getElementById("iname");
    var gender = document.getElementById("igender");
    var category = document.getElementById("icategory");
    var fathername = document.getElementById("ifathername");
    var mothername = document.getElementById("imothername");
    var address = document.getElementById("iaddress");
    var mobileno = document.getElementById("imobileno");
    var city = document.getElementById("icity");
    var medium = document.getElementById("imedium");
    var examcenter = document.getElementById("iexamcenter");
    var examcode = document.getElementById("iexamcode");
    var universityboard = document.getElementById("iuniversityboard");
    var passingyear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
    var subjectname = document.getElementById("isubjectname");
    var subjectcode = document.getElementById("isubjectcode");
    var date = document.getElementById("idate");
    var place = document.getElementById("iplace");
    var studentsign = document.getElementById("istudentsign");
    var submitbutton = document.getElementById("isubmit");
    var canclebutton = document.getElementById("icancle");


    if(registrationno.value==="")
    {
        alert("please enter registration no");
        return;
    }
    if(rollno.value==="")
    {
        alert("please enter rollno");
        return;
    }
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
    if(address.value==="")
    {
        alert("please enter address");
        return;
    }
    if(mobileno.value==="")
    {
        alert("please enter mobile no");
        return;
    }
    if(examcenter.value==="")
    {
        alert("please enter examcenter");
        return;
    }
    if(examcode.value==="")
    {
        alert("please enter examcode");
        return;
    }
    if(universityboard.value==="")
    {
        alert("please enter university board");
        return;
    }
    if(passingyear.value==="")
    {
        alert("please enter passingyear");
        return;
    }
    if(marks.value==="")
    {
        alert("please enter marks");
        return;
    }
    if(percentage.value==="")
    {
        alert("please enter percentage");
        return;
    }
    if(division.value==="")
    {
        alert("please enter division");
        return;
    }
    if(subjectcode.value==="")
    {
        alert("please enter subjectcode");
        return;
    }
    if(subjectname.value==="")
    {
        alert("please enter subjectname");
        return;
    }
    if(date.value==="")
    {
        alert("please enter date");
        return;
    }
    if(place.value==="")
    {
        alert("please enter place");
        return;
    }
    if(studentsign.value==="")
    {
        alert("please enter signature");
        return;
    }
    var formData = {
                     "registrationno" : registrationno.value,
                     "rollno" : rollno.value,
                     "name" : name.value,
                     "fathername" : fathername.value,
                     "mothername" : mothername.value,
                     "address" : address.value,
                     "mobileno" : mobileno.value,
                     "city" : city.value,
                     "medium" : medium.value,
                     "examcenter" : examcenter.value,
                     "examcode" : examcode.value,
                     "universityboard" : universityboard.value,
                     "passingyear" : passingyear.value,
                     "marks" : marks.value,
                     "percentage" : percentage.value,
                     "division" : division.value,
                     "subjectname" :subjectname.value,
                     "subjectcode" : subjectcode.value,
                     "date" : date.value,
                     "place" : place.value,
                     "studentsign" : studentsign.value,
    };

}