function validate() {
    var registrationno = document.getElementById("iregistrationno");
    var rollno = document.getElementById("irollno");
    var name = document.getElementById("iname");
    var dateofbirth = document.getElementById("idob");
    var gender = document.getElementById("igender");
    var category = document.getElementById("icategory");
    var fathername = document.getElementById("ifathername");
    var fatheroccupation = document.getElementById("ifatheroccupation");
    var mothername = document.getElementById("imothername");
    var motheroccupation = document.getElementById("imotheroccupation");
    var address = document.getElementById("iaddress");
    var mobileno = document.getElementById("imobileno");
    var emailid = document.getElementById("iemailid");
    var universityboard = document.getElementById("iuniversityboard");
    var passingyear = document.getElementById("ipassingyear");
    var marks = document.getElementById("imarks");
    var percentage = document.getElementById("ipercentage");
    var division = document.getElementById("idivision");
    var campusyoustudy = document.getElementById("icys");
    var anypendingbacklogorgap = document.getElementById("iresion");
    var radiobutton = document.getElementById("iradio");
    var ncsid = document.getElementById("incsid");
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
    if(fatheroccupation.value==="")
    {
        alert("please enter fatheroccupation");
        return;
    }
    if(mothername.value==="")
    {
        alert("please enter mothername");
        return;
    }
    if(motheroccupation.value==="")
    {
        alert("please enter motheroccupation");
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
    if(campusyoustudy.value==="")
    {
        alert("please enter campus you study");
        return;
    }
    if(anypendingbacklogorgap.value==="")
    {
        alert("please enter any pending backlog or gap");
        return;
    }
    if(ncsid.value==="")
    {
        alert("please enter ncsid");
        return;
    }
}