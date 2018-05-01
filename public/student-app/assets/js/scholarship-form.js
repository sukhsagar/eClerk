function disableControls(){
    document.getElementById("stuname").disabled=true;
    document.getElementById("rollno").disabled=true;
    document.getElementById("class").disabled=true;
    document.getElementById("category").disabled=true;
    document.getElementById("minority").disabled=true;
    document.getElementById("incomeCertificate").disabled=true;
    document.getElementById("residenceCertificate").disabled=true;
    document.getElementById("concession").disabled=true;
    document.getElementById("submit").disabled=true;
};

function edit(){
    document.getElementById("minority").disabled=false;
    document.getElementById("incomeCertificate").disabled=false;
    document.getElementById("residenceCertificate").disabled=false;
    document.getElementById("concession").disabled=false;
    document.getElementById("submit").disabled=false;
    document.getElementById("edit").disabled=true;
};



function validate(){
    var stuName = document.getElementById("stuname")
    var rollNo = document.getElementById("rollno")
    var stuClass = document.getElementById("class")
    var category = document.getElementById("category")
    var minority = document.getElementById("minority")
    var incomeCertificate = document.getElementById("incomeCertificate")
    var residenceCertificate = document.getElementById("residenceCertificate")
    var concession = document.getElementById("concession")
    
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
    firebase.database().ref('StudentDetail' + documents).push(formData).then(function(){
        alert("Your Scholarship Form has been submitted.");
        document.getElementById("submitQualification").disabled=true;
        document.getElementById("resetQualifications").disabled=true;
    });
}    


