function load(){
    var data={};

    firebase.database().ref('gndu-amritsar/index').once('value',function(snapshot){
        data=snapshot.val();
        var recent = document.getElementById("recent");
        var message = document.getElementById("message");

        recent.innerHTML = data.recent;
        message.innerHTML = data.message;

        
    })
}