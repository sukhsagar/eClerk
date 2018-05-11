function validate()
{
var name = document.getElementById("iname");
var rollNo = document.getElementById("irollno");
var jclass = document.getElementById("iclass");
var event1 = document.getElementById("i1event");
var event2 = document.getElementById("i2event");
var event3 = document.getElementById("i3event");
var event4 = document.getElementById("i4event");
var event5 = document.getElementById("i5event");
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
    if(jclass.value==="")
    {
        alert("please enter class");
        return;
    }
    if(event1.checked==false && event2.checked==false && event3.checked==false && event4.checked==false && event5.checked==false)
    {
        alert("Please select atleast 1 event.");
        return;
    }
    var formData = {
                    "name" : name.value,
                    "rollNo" : rollNo.value,
                    "jclass" : jclass.value,
                    "events" : events.value,
    };
}
