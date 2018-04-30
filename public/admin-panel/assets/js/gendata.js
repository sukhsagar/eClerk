function validate() {
    var registrationno = document.getElementById("iregistrationno");
    var rollno = document.getElementById("irollno");
    var universityrank = document.getElementById("iuniversityrank");
    var category = document.getElementById("icategory");
    var name = document.getElementById("iname");
    var gender = document.getElementById("igender");
    var dateofbirth = document.getElementById("idob");
    var fathername = document.getElementById("ifathername");
    var mothername = document.getElementById("imothername");
    var address = document.getElementById("iaddress");
    var mobileno = document.getElementById("imobileno");
    var emailid = document.getElementById("iemailid");
    var universityboard = document.getElementById("iuniversityboard");
    var passingyear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
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
    if(universityrank.value==="")
    {
        alert("please enter universityrank");
        return;
    }
    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(dateofbirth.value==="")
    {
        alert("please enter date of birth");
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
    if(emailid.value==="")
    {
        alert("please enter email id");
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
    var formData = {
                    "registrationno" : registrationno.value,
                     "rollno" : rollno.value,
                     "universityrank" : universityrank.value,
                     "name" : name.value,
                     "dateofbirth" : dateofbirth.value,
                     "fathername" : fathername.value,
                     "mothername" : mothername.value,
                     "address" : address.value,
                     "mobileno" : mobileno.value,
                     "emailid" : emailid.value,
                     "universityboard" : universityboard.value,
                     "passingyear" : passingyear.value,
                     "marks" : marks.value,
                     "percentage" : percentage.value,
                     "division" : division.value,
    };
}