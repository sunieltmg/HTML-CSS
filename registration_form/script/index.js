// function matchPassword(){
//     var password=document.getElementById('password').value;
//     var confirmPassword=document.getElementById('confirmPassword').value;
//     if(password==confirmPassword){
//     alert('Password not matched');
// }

// }

// var firstName=document.forms['reg_form']['firstName'].value;
// alert(firstName);

function onSubmit(){
    var password = document.forms['reg_form']['password'].value.trim();//trim method is used to remove any blank spaces
    var confirmPassword = document.forms['reg_form']['confirmPassword'].value;
    var contact= document.forms['reg_form']['contact'].value;
    var contact_reg=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if(password.trim()=="" || confirmPassword.trim()=="" || contact.trim()==""){
        alert("No blank values are allowed");
        return false;
    }

    if(password.trim().length<5){//length gives the size 
        document.getElementById('password').style.border="2px solid red";

        alert('password too short');
        return false;
    }

    if (password != confirmPassword){
        alert("Password not matched");
        return false;

    }


    if(!contact.match(contact_reg)){
        alert('Invalid phone number');
        return false;
    }
}
