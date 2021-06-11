function myFunc(){
    document.getElementById('dad').innerHTML="Head of Vundhyalas";
    }

function momfunc(){
        var str = "Actual Head";
        var result = str.fontcolor("pink");
        var result1 = result.fontsize(50);
        document.getElementById('mom').innerHTML=result1;
    }    

function errorfunc(){
    window.alert("Do not Click the button.")
}    

function validateLogin(){
    var username1 = document.forms["login"]["username"].value;
    var password1 = document.forms["login"]["password"].value;
    if(username1 == ""){
        alert("Username cannot be empty");
    }
    if(password1 == ""){
        alert("Password cannot be empty");
    }
    return false;

    //username1,password1 should match from db
}

function validateSignup(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var mobile = document.getElementById("mobile").value;

    alert(password +" "+password1);

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$/;
    console.log(email);
    if (email.match(validRegex)) {
      return true;  
    } else {
      alert("Invalid email address!");
      return false;
    }

    // var pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    // if(password.match(pwdRegex)){
    //     return true;
    // }else{
    //     alert("Invalid Password");
    //     return false;
    // }

    if(password == password1){
        return true;
    }else{
        alert("Passwords do not match");
        return false;
    }

    

    

//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)

}