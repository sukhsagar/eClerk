function load(){
    var data={};

    firebase.database().ref('gndu-amritsar/student/2015CSB1002').once('value',function(snapshot){
        data=snapshot.val();

        //Populating Data.
        
        var rollNo = document.getElementById("rollno");
        var stuName = document.getElementById("stuname");
       
    
        
        //if(data.rollNo!=NULL || data.rollNo!=undefined){
            rollNo.value=data.rollNo;
        //}
        //if(data.name!=NULL || data.name!=undefined){
            stuName.value=data.name;
        //}
        
    })
}
function disableControls(){
    document.getElementById("rollno").disabled=true;
    document.getElementById("stuname").disabled=true;
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


