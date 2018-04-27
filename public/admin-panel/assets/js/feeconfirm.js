function validate() {
    var name = document.getElementById("iname");
    var rollno = document.getElementById("irollno");
    var fclass = document.getElementById("iclass");
    var bankchallannumber = document.getElementById("ibcn");
    var bankdepositid = document.getElementById("ibdi");
    var feedepositdate = document.getElementById("ifdd");
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
    if(fclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(bankchallannumber.value==="")
    {
        alert("please enter bank challan no");
        return;
    }
    if(bankdepositid.value==="")
    {
        alert("please enter bank deposit id");
        return;
    }
    if(feedepositdate.value==="")
    {
        alert("please enter fee deposit date");
        return;
    }
}