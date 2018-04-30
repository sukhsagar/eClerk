document.getElementById("submitPersonal").disabled=true;
document.getElementById("resetPersonal").disabled=true;
document.getElementById("submitParents").disabled=true;
document.getElementById("resetParents").disabled=true;
document.getElementById("submitQualification").disabled=true;
document.getElementById("resetQualification").disabled=true;


function editPersonal(){
    document.getElementById("submitPersonal").disabled=false;
    document.getElementById("resetPersonal").disabled=false;
}
function editParents(){
    document.getElementById("submitParents").disabled=false;
    document.getElementById("resetParents").disabled=false;
}
function editQualification(){
    document.getElementById("submitQualification").disabled=false;
    document.getElementById("resetQualification").disabled=false;
}

function validatePersonal(){
    var  regNo = document.getElementById("regno")
    var rollNo = document.getElementById("rollno")
    var stuName = document.getElementById("stuname")
    var uniRank = document.getElementById("rank")
    if(uniRank.value===""){
        alert("Please enter your entrance Test Rank"); return;
    }
    var dob = document.getElementById("dob")
    if(dob.value===""){
        alert("Please enter your Date of Birth"); return;
    }
}
function validateParents(){
    var category = document.getElementById("category")
    var gender = document.getElementById("gender")
    var fatherName = document.getElementById("father_name")
    var motherName = document.getElementById("mother_name")
    var address = document.getElementById("address")
    if(address.value===""){
        alert("Please enter your address"); return;
    }
    var mobNo = document.getElementById("mobile_no")
    if(mobNo.value===""){
        alert("Please enter your Mobile number"); return;
    }
    var emailID = document.getElementById("email_id")
    if(emailID.value===""){
        alert("Please enter your E-mail ID"); return;
    }
}
function validateQualification(){
    var board_10 = document.getElementById("board10")
    if(board_10.value===""){
        alert("Please enter your 10th Board"); return;
    }
    var passingYear_10 = document.getElementById("pass10")
    if(passingYear_10.value===""){
        alert("Please enter your 10th Passing Year"); return;
    }
    var marks_10 = document.getElementById("marks10")
    if(marks_10.value===""){
        alert("Please enter your 10th aggregate marks"); return;
    }
    var percentage_10 = document.getElementById("percent10")
    if(percentage_10.value===""){
        alert("Please enter your 10th Percent"); return;
    }
    var division_10 = document.getElementById("division10")
    if(division_10.value===""){
        alert("Please enter your 10th Division"); return;
    }
    var board_12 = document.getElementById("board12")
    if(board_12.value===""){
        alert("Please enter your 12th Board"); return;
    }
    var passingYear_12 = document.getElementById("pass12")
    if(passingYear_12.value===""){
        alert("Please enter your 12th Passing Year"); return;
    }
    var marks_12 = document.getElementById("marks12")
    if(marks_12.value===""){
        alert("Please enter your 12th Marks"); return;
    }
    var percentage_12 = document.getElementById("percent12")
    if(percentage_12.value===""){
        alert("Please enter your 12th"); return;
    }
    var division_12 = document.getElementById("division12")
    if(division_12.value===""){
        alert("Please enter your 12th Division"); return;
    }
    var board_grad =document.getElementById("boardgrad")
    if(board_grad.value===""){
        alert("Please enter your Graduation University"); return;
    }
    var passingYear_grad = document.getElementById("passgrad")
    if(passingYear_grad.value===""){
        alert("Please enter your Graduation Passing Year"); return;
    }
    var marks_grad = document.getElementById("marksgrad")
    if(marks_grad.value===""){
        alert("Please enter your Graduation Marks"); return;
    }
    var percentage_grad = document.getElementById("percentgrad")
    if(percentage_grad.value===""){
        alert("Please enter your Graduation Percentage/CGPA"); return;
    }
    var division_grad = document.getElementById("divisiongrad")
    if(division_grad.value===""){
        alert("Please enter your Graduation Division"); return;
    }
    var formDataPersonal={
        "university Rank" : uniRank.value,
        "Date Of Birth" : dob.value
    };
    
    var formDataParents={
        "Address" : address.value,
        "Mobile Number" : mobNo.value,
        "E-mail ID" : emailID.value
    };

    var formDataQualifications={
        "10th Details":{
            "10th Board" : board_10.value,
            "10th Passing Year" : passingYear_10.value,
            "10th Marks" : marks_10.value,
            "10th Percentage" : percentage_10.value,
            "10th Division" : division_10.value
        },
        "12th Board" : board_12.value,
        "12th Passing Year" : passingYear_12.value,
        "12th Marks" : marks_12.value,
        "12th Percentage" : percentage_12.value,
        "12th Division" : division_12.value,
        "Graduation Board" : board_grad.value,
        "Graduation Passing Year" : passingYear_grad.value,
        "Graduation Marks" : marks_grad.value,
        "Graduation Percentage" : percentage_grad.value,
        "Graduation Division" : division_grad.value
    };
    firebase.database().ref('StudentDetail' + personalDetail).push(formDataPersonal).then(function(){
        alert("Your personal detail has been submitted.");
        document.getElementById("submitPersonal").disabled=true;
        document.getElementById("resetPersonal").disabled=true;
    });
    firebase.database().ref('StudentDetail' + personalDetail).push(formDataParents).then(function(){
        alert("Your Fees has been verified.");
        document.getElementById("submitParents").disabled=true;
        document.getElementById("resetParents").disabled=true;
    });
    firebase.database().ref('StudentDetail' + academicDetail).push(formDataQualifications).then(function(){
        alert("Your Fees has been verified.");
        document.getElementById("submitQualification").disabled=true;
        document.getElementById("resetQualifications").disabled=true;
    });
}