function validate()
{
var emailId = document.getElementById("iemailid");
var password = document.getElementById("ipassword");
if(emailId.value==="")
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