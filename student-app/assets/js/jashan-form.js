function validate(){
    var studentName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var stuClass = document.getElementById("class")
    var event1 = document.getElementById("event1")
    var event2 = document.getElementById("event2")
    var event3 = document.getElementById("event3")
    var event4 = document.getElementById("event4")
    var event5 = document.getElementById("event5")

    if(studentName.value===""){
        alert("Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Enter your Roll No"); return;
    }
    if(stuClass.value===""){
        alert("Enter your Class"); return;
    }
    if(event1.checked==false || event2.checked==false || event3.checked==false || event4.checked==false || event5.checked==false){
        alert("select atleast 1 event"); return;
    }
}



