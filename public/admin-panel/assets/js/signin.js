function validate()
{
var emailid = document.getElementById("iemailid");
var password = document.getElementById("ipassword");
if(emailid.value==="")
{
    alert("please enter a valid email address");
    return;
}
if(password.value==="")
{
    alert("please enter a valid password");
    return;
}
}