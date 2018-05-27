function loadData(){
    var students = {};
    firebase.database().ref('gndu-amritsar/classStudents/MCA-TYC/').once('value',function(snapshot){
        students=snapshot.val();
    }).then(function(){
    	//Code check krli.
    	foreach(students)
    	firebase.database().ref('gndu-amritsar/student/'+rollNo).once('value',function(snapshot){
	        studentDetail=snapshot.val();
	    }).then(function(){
	    	//Ethe student d row gennerate krdo.
	    	
	    });
    });