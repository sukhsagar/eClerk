function validate(){
    var stuName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var stuClass = document.getElementById("class")
    var category = document.getElementById("category")
    var minority = document.getElementById("minority")
    var incomeCertificate = document.getElementById("incomeCertificate")
    var residenceCertificate = document.getElementById("residenceCertificate")
    var concession = document.getElementById("concession")
    if(stuName.value===""){
        alert("Please Enter your Name"); return;
    }
    if(rollNo.value===""){
        alert("Please Enter your Roll No."); return;
    }
    if(stuClass.value===""){
        alert("Please Enter your Class"); return;
    }
    if(incomeCertificate.value===""){
        alert("Please upload your Income Certificate"); return;
    }
    if(residenceCertificate.value===""){
        alert("Please upload your Residence Certificate"); return;
    }
    var formData={
        "Minority":minority,
        "Income Certificate":incomeCertificate.value,
        "Residence Certificate":residenceCertificate.value,
        "Concession":concession
    }
    firebase.database().ref('student-detail-table' + documents).set(formData).then(function(){
        alert("You have succesfully applied for scholarship.");
        document.getElementById("submit").disabled=true;
    })
}    


