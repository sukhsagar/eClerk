function validate() {
    var name = document.getElementById("iname");
    var rollNo = document.getElementById("irollno");
    var sclass = document.getElementById("iclass");
    var category = document.getElementById("icategory");
    var maniority = document.getElementById("imaniority");
    var incomeCertificate = document.getElementById("iincome");
    var residenCecertificate = document.getElementById("iresidence");
    var feeConcession = document.getElementById("ifee");
    var submitButton = document.getElementById("isubmit");
    var cancleButton = document.getElementById("icancle");

    if(name.value==="")
    {
        alert("please enter name");
        return;
    }
    if(rollNo.value==="")
    {
        alert("please enter rollno");
        return;
    }
    if(sclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(incomeCertificate.value==="")
    {
        alert("please attach income certificate");
        return;
    }
    if(residenceCertificate.value==="")
    {
        alert("please attach residence certificate");
        return;
    }
    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "sclass" : sclass.value,
                    "incomeCertificate" : incomeCertificate.value,
                    "residenceCertificate" : residenceCertificate.value,
    };
}