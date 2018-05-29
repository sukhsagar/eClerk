
var notice1 = document.getElementById("notice1");
var notice2 = document.getElementById("notice2");
var notice3 = document.getElementById("notice3");

firebase.database().ref('gndu-amritsar/teacherOnLeave/').once('value',function(snapshot2){
    data=snapshot2.val();

var teacherLeave1 = document.getElementById("teacherLeave1");
var teacherLeave2 = document.getElementById("teacherLeave2");
var teacherLeave3 = document.getElementById("teacherLeave3");

            teacherLeave1.innerHTML = data.teacherName;
            teacherLeave2.innerHTML = data.teacherName;
            teacherLeave3.innerHTML = data.teacherName;
})

function loadTimeTable() {
            var data1 = {};
        
    firebase.database().ref('gndu-amritsar/timeTable/' + stuClass + '/' ).once('value', function (snapshot1) {
        data1 = snapshot1.val();

        var mon1 = document.getElementById("mon1");
        var mon2 = document.getElementById("mon2");
        var mon3 = document.getElementById("mon3");
        var mon4 = document.getElementById("mon4");
        var mon5 = document.getElementById("mon5");
        var mon6 = document.getElementById("mon6");
        var mon7 = document.getElementById("mon7");
        var mon8 = document.getElementById("mon8");

        var tues1 = document.getElementById("tues1");
        var tues2 = document.getElementById("tues2");
        var tues3 = document.getElementById("tues3");
        var tues4 = document.getElementById("tues4");
        var tues5 = document.getElementById("tues5");
        var tues6 = document.getElementById("tues6");
        var tues7 = document.getElementById("tues7");
        var tues8 = document.getElementById("tues8");

        var wed1 = document.getElementById("wed1");
        var wed2 = document.getElementById("wed2");
        var wed3 = document.getElementById("wed3");
        var wed4 = document.getElementById("wed4");
        var wed5 = document.getElementById("wed5");
        var wed6 = document.getElementById("wed6");
        var wed7 = document.getElementById("wed7");
        var wed8 = document.getElementById("wed8");

        var thu1 = document.getElementById("thu1");
        var thu2 = document.getElementById("thu2");
        var thu3 = document.getElementById("thu3");
        var thu4 = document.getElementById("thu4");
        var thu5 = document.getElementById("thu5");
        var thu6 = document.getElementById("thu6");
        var thu7 = document.getElementById("thu7");
        var thu8 = document.getElementById("thu8");

        var fri1 = document.getElementById("fri1");
        var fri2 = document.getElementById("fri2");
        var fri3 = document.getElementById("fri3");
        var fri4 = document.getElementById("fri4");
        var fri5 = document.getElementById("fri5");
        var fri6 = document.getElementById("fri6");
        var fri7 = document.getElementById("fri7");
        var fri8 = document.getElementById("fri8");

        mon1.innerHTML = data1.monday.first;
        mon2.innerHTML = data1.monday.second;
        mon3.innerHTML = data1.monday.third;
        mon4.innerHTML = data1.monday.fourth;
        mon5.innerHTML = data1.monday.fifth;
        mon6.innerHTML = data1.monday.sixth;
        mon7.innerHTML = data1.monday.seventh;
        mon8.innerHTML = data1.monday.eighth;

        tues1.innerHTML = data1.tuesday.first;
        tues2.innerHTML = data1.tuesday.second;
        tues3.innerHTML = data1.tuesday.third;
        tues4.innerHTML = data1.tuesday.fourth;
        tues5.innerHTML = data1.tuesday.fifth;
        tues6.innerHTML = data1.tuesday.sixth;
        tues7.innerHTML = data1.tuesday.seventh;
        tues8.innerHTML = data1.tuesday.eighth;

        wed1.innerHTML = data1.wedday.first;
        wed2.innerHTML = data1.wedday.second;
        wed3.innerHTML = data1.wedday.third;
        wed4.innerHTML = data1.wedday.fourth;
        wed5.innerHTML = data1.wedday.fifth;
        wed6.innerHTML = data1.wedday.sixth;
        wed7.innerHTML = data1.wedday.seventh;
        wed8.innerHTML = data1.wedday.eighth;

        thu1.innerHTML = data1.thursday.first;
        thu2.innerHTML = data1.thursday.second;
        thu3.innerHTML = data1.thursday.third;
        thu4.innerHTML = data1.thursday.fourth;
        thu5.innerHTML = data1.thursday.fifth;
        thu6.innerHTML = data1.thursday.sixth;
        thu7.innerHTML = data1.thursday.seventh;
        thu8.innerHTML = data1.thursday.eighth;

        fri1.innerHTML = data1.friday.first;
        fri2.innerHTML = data1.friday.second;
        fri3.innerHTML = data1.friday.third;
        fri4.innerHTML = data1.friday.fourth;
        fri5.innerHTML = data1.friday.fifth;
        fri6.innerHTML = data1.friday.sixth;
        fri7.innerHTML = data1.friday.seventh;
        fri8.innerHTML = data1.friday.eighth;
    }).then(function(){
        document.getElementById('dayTitle').innerHTML=weekDay[d].toUpperCase();
    });
}
