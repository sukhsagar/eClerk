function dmcChk() {
    var batch = document.getElementById("ibatch");
    var semester = document.getElementById("isemester");
    var name = document.getElementById("iname");
    var toggle1 = document.getElementById("toggle1");
    var toggle2 = document.getElementById("toggle2");
    var toggle3 = document.getElementById("toggle3");
    var toggle4 = document.getElementById("toggle4");
    var toggle5 = document.getElementById("toggle5");
    var toggle6 = document.getElementById("toggle6");

    firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/').on('value', function (snapshot2) {
        data = snapshot2.val();
        roll = ['2015CSB1551', '2015CSB1552', '2015CSB1553', '2015CSB1554', '2015CSB1555', '2015CSB1556']
        for (i = 1; i <= 6; i++) {
            rollNo = roll[i];
            if (data.rollNo === "Pending") {
                if (i = 1) {
                    toggle1.checked = true;
                }
                else if (i = 2) {
                    toggle2.checked = true;
                }
                else if (i = 3) {
                    toggle3.checked = true;
                }
                else if (i = 4) {
                    toggle4.checked = true;
                }
                else if (i = 5) {
                    toggle5.checked = true;
                }
                else if (i = 6) {
                    toggle6.checked = true;
                }

            }
        }
    })
}
function updateDmc(){
    flag=0;
    roll = ['2015CSB1551', '2015CSB1552', '2015CSB1553', '2015CSB1554', '2015CSB1555', '2015CSB1556']
    if(toggle1.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[1]).set(formData).then(function () {
            flag=1;
        });
    }
    if(toggle2.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[2]).set(formData).then(function () {
            flag=1;
        });
    }
    if(toggle3.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[3]).set(formData).then(function () {
            flag=1;
        });
    }
    if(toggle4.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[4]).set(formData).then(function () {
            flag=1;
        });
    }
    if(toggle5.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[5]).set(formData).then(function () {
            flag=1;
        });
    }
    if(toggle6.status===false){
        formData = {
            "status": "Pending"
        };
        firebase.database().ref('gndu-amritsar/DmcDistribution/MCA-(TYC)/' + roll[6]).set(formData).then(function () {
            flag=1;
        });
    }
    if(flag==1){
        alert("Information updated"); return;
    }

   
} 
    
