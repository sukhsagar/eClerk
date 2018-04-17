function validate() {
    var name = document.getElementById("iname");
    var rollno = document.getElementById("irollno");
    var spclass = document.getElementById("iclass");
    var dateofbirth = document.getElementById("idob");
    var gender = document.getElementById("igender");
    var mobileno = document.getElementById("imobileno");
    var emailid = document.getElementById("iemailid");
    var selectgames1 = document.getElementById("i1selectgames");
    var selectgames2 = document.getElementById("i2selectgames");
    var selectgames3 = document.getElementById("i3selectgames");
    var selectgames4 = document.getElementById("i4selectgames");
    var selectgames5 = document.getElementById("i5selectgames");
    var selectgames6 = document.getElementById("i6selectgames");
    var selectgames7 = document.getElementById("i7selectgames");
    var selectgames8 = document.getElementById("i8selectgames");
    var selectgames9 = document.getElementById("i9selectgames");
    var submitbutton = document.getElementById("isubmit");
    var canclebutton = document.getElementById("icancle");

    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(rollno.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(spclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(dateofbirth.value==="")
    {
        alert("please enter date of birth");
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
    if(selectgames1.checked==false && selectgames2.checked==false && selectgames3.checked==false && selectgames4.checked==false && selectgames5.checked==false && selectgames6.checked==false && selectgames7.checked==false && selectgames8.checked==false && selectgames9.checked==false)
    {
        alert("Please select atleast 1 game");
        return;
    }
}