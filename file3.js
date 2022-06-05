function Validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="course"&&password=="coursera")
    {
        alert("Login Successful");
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}
