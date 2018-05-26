function load(){
    var data={};

    firebase.database().ref('gndu-amritsar/index').once('value',function(snapshot){
        data=snapshot.val();
        var recent = document.getElementById("recent");
        var message = document.getElementById("message");

        recent.innerHTML = data.recent;
        message.innerHTML = data.message;

        
    })
    firebase.database().ref('gndu-amritsar/faculty').once('value',function(snapshot){
        data=snapshot.val();
        var teacherName1 = document.getElementById("teachername1");
        var teacherName2 = document.getElementById("teachername2");
        var teacherName3 = document.getElementById("teachername3");
        var teacherName4 = document.getElementById("teachername4");
        var teacherName5 = document.getElementById("teachername5");
        var teacherName6 = document.getElementById("teachername6");
        var teacherName7 = document.getElementById("teachername7");
        var teacherName8 = document.getElementById("teachername8");
        var teacherName9 = document.getElementById("teachername9");
        var teacherDetail1 = document.getElementById("teacherdetail1");
        var teacherDetail2 = document.getElementById("teacherdetail2");
        var teacherDetail3 = document.getElementById("teacherdetail3");
        var teacherDetail4 = document.getElementById("teacherdetail4");
        var teacherDetail5 = document.getElementById("teacherdetail5");
        var teacherDetail6 = document.getElementById("teacherdetail6");
        var teacherDetail7 = document.getElementById("teacherdetail7");
        var teacherDetail8 = document.getElementById("teacherdetail8");
        var teacherDetail9 = document.getElementById("teacherdetail9");

        teacherName1.innerHTML = data.teacherName1;
        teacherName2.innerHTML = data.teacherName2;
        teacherName3.innerHTML = data.teacherName3;
        teacherName4.innerHTML = data.teacherName4;
        teacherName5.innerHTML = data.teacherName5;
        teacherName6.innerHTML = data.teacherName6;
        teacherName7.innerHTML = data.teacherName7;
        teacherName8.innerHTML = data.teacherName8;
        teacherName9.innerHTML = data.teacherName9;
        teacherDetail1.innerHTML = data.teacherDetail1;
        teacherDetail2.innerHTML = data.teacherDetail2;
        teacherDetail3.innerHTML = data.teacherDetail3;
        teacherDetail4.innerHTML = data.teacherDetail4;
        teacherDetail5.innerHTML = data.teacherDetail5;
        teacherDetail6.innerHTML = data.teacherDetail6;
        teacherDetail7.innerHTML = data.teacherDetail7;
        teacherDetail8.innerHTML = data.teacherDetail8;
        teacherDetail9.innerHTML = data.teacherDetail9;

        
    })


}

var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

var formData={
    "name":name.value,
    "email":email.value,
    "subject":subject.value,
    "message":message.value
}
firebase.database().ref('gndu-amritsar/index/contact/').push(formData).then(function(){
    alert("You have succesfully filled the examination form.");
    document.getElementById("submit").disabled=true;
});
var data1={};
firebase.database().ref('gndu-amritsar/index/testimonials').once('value',function(snapshot){
    data1=snapshot.val();
    var name1 = document.getElementById("name1");
    var message1 = document.getElementById("message1");
    var name2 = document.getElementById("name2");
    var message2 = document.getElementById("message2");
    var name3 = document.getElementById("name3");
    var message3 = document.getElementById("message3");

    name1.innerHTML = data1.name1;
    message1.innerHTML = data1.message1;
    name2.innerHTML = data1.name2;
    message2.innerHTML = data1.message2;
    name3.innerHTML = data1.name3;
    message3.innerHTML = data1.message3;

    
})