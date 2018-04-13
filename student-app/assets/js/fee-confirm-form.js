function validate(){
    var studentName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var stuClass = document.getElementById("class")
    var depositID = document.getElementById("deposit_ID")
    var journalID = document.getElementById("journal_ID")
    var depositDate = document.getElementById("depositDate")
    if(studentName.value===""){
        alert("Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Enter your Roll No"); return;
    }
    if(stuClass.value===""){
        alert("Enter your Class"); return;
    }
    if(depositID.value===""){
        alert("Enter the Deposit ID"); return;
    }
    if(journalID.value===""){
        alert("Enter the Journal ID"); return;
    }
    if(depositDate.value===""){
        alert("Enter the fee deposit date"); return;
    }
}
    