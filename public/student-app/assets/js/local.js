function local(){
    var roll = localStorage.getItem('rollNo');
      if(roll===null || roll===undefined){
          window.location = "sign-in.html"
      }
}
function delLocal(){
    localStorage.removeItem('rollNo');
    localStorage.removeItem('name');
    localStorage.removeItem('class');
}
function localHome(){
    var roll = localStorage.getItem('rollNo');
      if(roll===null || roll===undefined){
          window.location = "assets/templates/sign-in.html"
      }
}