function validate() {
    var name = document.getElementById("iname");
    var rollno = document.getElementById("irollno");
    var sclass = document.getElementById("iclass");
    var category = document.getElementById("icategory");
    var maniority = document.getElementById("imaniority");
    var incomecertificate = document.getElementById("iincome");
    var residencecertificate = document.getElementById("iresidence");
    var feeconcession = document.getElementById("ifee");
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
    if(sclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(incomecertificate.value==="")
    {
        alert("please attach income certificate");
        return;
    }
    if(residencecertificate.value==="")
    {
        alert("please attach residence certificate");
        return;
    }
}