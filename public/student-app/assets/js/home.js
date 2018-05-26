var notice1 = document.getElementById("notice1");
var notice2 = document.getElementById("notice2");
var notice3 = document.getElementById("notice3");



function chkLogin(){
    var rollNo = localStorage.getItem('rollNo');
      if(rollNo===null || rollNo===undefined){
          window.location = "./assets/templates/sign-in.html"
      }
}

var stuClass = localStorage.getItem('class');
function load(){
	var nameLabel = document.getElementById("nameLabel");
	var firstName = localStorage.getItem('name').split(" ");
	nameLabel.innerHTML = firstName[0];
    var data1={};
    firebase.database().ref('gndu-amritsar/timeTable/' + stuClass).once('value',function(snapshot1){
        data1=snapshot1.val();

        var mon9_10 = document.getElementById("mon9-10");
        var mon10_11 = document.getElementById("mon10-11");
        var mon11_12 = document.getElementById("mon11-12");
        var mon12_1 = document.getElementById("mon12-1");
        var mon1_2 = document.getElementById("mon1-2");
        var mon2_3 = document.getElementById("mon2-3");
        var mon3_4 = document.getElementById("mon3-4");   
        var mon4_5 = document.getElementById("mon4-5");

        mon9_10.innerHTML = data1.monday.first;
        mon10_11.innerHTML = data1.monday.second;
        mon11_12.innerHTML = data1.monday.third;
        mon12_1.innerHTML = data1.monday.fourth;
        mon1_2.innerHTML = data1.monday.fifth;
        mon2_3.innerHTML = data1.monday.sixth;
        mon3_4.innerHTML = data1.monday.seventh;
        mon4_5.innerHTML = data1.monday.eighth;
    })

    firebase.database().ref('gndu-amritsar/teacherOnLeave/').once('value',function(snapshot2){
        data=snapshot2.val();

        var teacherLeave1 = document.getElementById("teacherLeave1");
        var teacherLeave2 = document.getElementById("teacherLeave2");
        var teacherLeave3 = document.getElementById("teacherLeave3");

            teacherLeave1.innerHTML = data.teacherName;
            teacherLeave2.innerHTML = data.teacherName;
            teacherLeave3.innerHTML = data.teacherName;
        
    })
}