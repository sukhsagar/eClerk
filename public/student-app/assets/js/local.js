function local(){
    var roll = localStorage.getItem('rollNo');
      if(roll===null || roll===undefined){
          window.location = "sign-in.html"
      }
}