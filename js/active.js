function login(){
    document.title="Log In";
    const myform_reg = document.getElementById("myform-register");
    myform_reg.classList.remove("active-form");
    const myform_log = document.getElementById("myform-login");
    myform_log.classList.add("active-form"); 
}
function make(){
    document.title="Register";
    const myform_reg = document.getElementById("myform-login");
    myform_reg.classList.remove("active-form");
    const myform_log = document.getElementById("myform-register");
    myform_log.classList.add("active-form"); 
}

