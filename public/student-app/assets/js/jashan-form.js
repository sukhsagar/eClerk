function disableControls(){
    document.getElementById("stuname").disabled=true;
    document.getElementById("rollno").disabled=true;
    document.getElementById("class").disabled=true;
    document.getElementById("event1").disabled=true;
    document.getElementById("event2").disabled=true;
    document.getElementById("event3").disabled=true;
    document.getElementById("event4").disabled=true;
    document.getElementById("event5").disabled=true;
    document.getElementById("submit").disabled=true;
};
function edit(){
    document.getElementById("event1").disabled=false;
    document.getElementById("event2").disabled=false;
    document.getElementById("event3").disabled=false;
    document.getElementById("event4").disabled=false;
    document.getElementById("event5").disabled=false;
    document.getElementById("edit").disabled=true;
    document.getElementById("submit").disabled=false;
};

function validate(){
    var studentName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var stuClass = document.getElementById("class")
    var event1 = document.getElementById("event1")
    var event2 = document.getElementById("event2")
    var event3 = document.getElementById("event3")
    var event4 = document.getElementById("event4")
    var event5 = document.getElementById("event5")

    
    if(event1.checked==false || event2.checked==false || event3.checked==false || event4.checked==false || event5.checked==false){
        alert("select atleast 1 event"); return;
    }
    var formData={
        
    }

}



