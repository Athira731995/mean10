function validate(){
    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var mobile=document.getElementById("mobile")
    var password=document.getElementById("password")
    if(name.value==""){
        alert("name can't be empty")
        name.focus()
        return false;

    }
    if(email.value==""){
        alert("email can't be empty")
        email.focus()
        return false;

    }
    if(mobile.value==""){
        alert("mobile can't be empty")
        mobile.focus()
        return false;

    }
    if(isNaN(mobile.value) ){
        alert("invalid mobile number")
        mobile.focus()
        return false;

    }
    if(mobile.value.length!=10 ){
        alert("length of mobile number should be 10")
        mobile.focus()
        return false;

    }
    if(password.value==""){
        alert("password can't be empty")
        password.focus()
        return false;

    }
    if(password.value.length<3 || password.value.length>5){
        alert("password length should be between 3 and 5")
        password.focus()
        return false;
    }

    


}