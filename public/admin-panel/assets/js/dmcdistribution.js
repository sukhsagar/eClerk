function validate(){
var batch = document.getElementById("ibatch");
var semester = document.getElementById("isemester");
var rollNo = document.getElementById("irollno");
var name = document.getElementById("iname");
var status = document.getElementById("istatus");

formData ={
    "rollNo" : rollNo.value,
    "name" : name.value,
    "status" : status.value
};
firebase.database().ref('dmcdistribution/' + rollNo.value).set(formData).then(function(){
    alert("You have succesfully enter detail.");
});
}