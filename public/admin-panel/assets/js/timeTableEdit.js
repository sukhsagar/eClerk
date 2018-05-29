function load(){
    firebase.database().ref('gndu-amritsar/timeTable/' + stuClass + '/' ).once('value',function(snapshot1){
        data=snapshot1.val();

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

        mon1.value = data.monday.first;
        mon2.value = data.monday.second;
        mon3.value = data.monday.third;
        mon4.value = data.monday.fourth;
        mon5.value = data.monday.fifth;
        mon6.value = data.monday.sixth;
        mon7.value = data.monday.seventh;
        mon8.value = data.monday.eighth;

        tues1.value = data.tuesday.first;
        tues2.value = data.tuesday.second;
        tues3.value = data.tuesday.third;
        tues4.value = data.tuesday.fourth;
        tues5.value = data.tuesday.fifth;
        tues6.value = data.tuesday.sixth;
        tues7.value = data.tuesday.seventh;
        tues8.value = data.tuesday.eighth;

        wed1.value = data.wednesday.first;
        wed2.value = data.wednesday.second;
        wed3.value = data.wednesday.third;
        wed4.value = data.wednesday.fourth;
        wed5.value = data.wednesday.fifth;
        wed6.value = data.wednesday.sixth;
        wed7.value = data.wednesday.seventh;
        wed8.value = data.wednesday.eighth;

        thu1.value = data.thursday.first;
        thu2.value = data.thursday.second;
        thu3.value = data.thursday.third;
        thu4.value = data.thursday.fourth;
        thu5.value = data.thursday.fifth;
        thu6.value = data.thursday.sixth;
        thu7.value = data.thursday.seventh;
        thu8.value = data.thursday.eighth;

        fri1.value = data.friday.first;
        fri2.value = data.friday.second;
        fri3.value = data.friday.third;
        fri4.value = data.friday.fourth;
        fri5.value = data.friday.fifth;
        fri6.value = data.friday.sixth;
        fri7.value = data.friday.seventh;
        fri8.value = data.monday.eighth;
})}

function updateTimeTable() {
    var stuClass= document.getElementById("class");
    var formData={
        "monday":{
            "first":mon1.value,
            "second":mon2.value,
            "third":mon3.value,
            "fourth":mon4.value,
            "fifth":mon5.value,
            "sixth":mon6.value,
            "seventh":mon7.value,
            "eighth":mon8.value
        },
        "tuesday":{
            "first":tues1.value,
            "second":tues2.value,
            "third":tues3.value,
            "fourth":tues4.value,
            "fifth":tues5.value,
            "sixth":tues6.value,
            "seventh":tues7.value,
            "eighth":tues8.value
        },
        "wednesday":{
            "first":wed1.value,
            "second":wed2.value,
            "third":wed3.value,
            "fourth":wed4.value,
            "fifth":wed5.value,
            "sixth":wed6.value,
            "seventh":wed7.value,
            "eighth":wed8.value
        },
        "thursday":{
            "first":thu1.value,
            "second":thu2.value,
            "third":thu3.value,
            "fourth":thu4.value,
            "fifth":thu5.value,
            "sixth":thu6.value,
            "seventh":thu7.value,
            "eighth":thu8.value
        },
        "friday":{
            "first":fri1.value,
            "second":fri2.value,
            "third":fri3.value,
            "fourth":fri4.value,
            "fifth":fri5.value,
            "sixth":fri6.value,
            "seventh":fri7.value,
            "eighth":fri8.value
        }

    }
    firebase.database().ref('gndu-amritsar/timeTable/' + stuClass.value + '/').set(formData).then(function(){
        alert("You have succesfully updated the time Table.");
        document.getElementById("update").disabled=true;
    })
}