var message = document.getElementById("message")

function load(){
    var data={};

    firebase.database().ref('gndu-amritsar/student/2015CSB1553').once('value',function(snapshot){
        data=snapshot.val();
        message.innerHTML = data.value;

    }
)}