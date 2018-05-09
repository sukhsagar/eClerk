function validate(){
var noticeheading = document.getElementById("inoticeheading");
var uploadimage = document.getElementById("iuploadimage");
var validity = document.getElementById("ivalidity");
var uploadbutton = document.getElementById("iupload");
var canclebutton = document.getElementById("icancle");

var today = new Date().toJSON();
var formData={
    "noticeheading" : noticeheading.value,
    "uploadimage" : uploadimage.value,
    "validity" :validity.value,
    "uploadedon" : today

};
firebase.database().ref('noticecreation/' + noticeheading.value).push(formData).then(function(){
    alert("You have succesfully notice creation.");
});
}