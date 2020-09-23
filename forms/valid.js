


function index(){
    const firstname= document.getElementById("f_name");
    const middlename= document.getElementById("m_name");
    const lastname= document.getElementById("l_name");
    const email= document.getElementById("email");
    const address= document.getElementById("address");
    const phonenumber= document.getElementById("phonenumber");
    const gender= document.getElementById("gender");

    if (!letters.test(firstname) || firstname.length == 0 || !letters.test(middlename) || middlename.length == 0 || 
    !letters.test(lastname) || lastname.length == 0 || !email.test(email) || email.length == 0 ||
    !phonenumber.test(phone) || phonenumber.length == 0 || address.length == 0 || address.length == 0){
        return window.alert("One or more fields are incomplete or invalid");
    }

    localStorage.setItem("first",firstname.value);
    localStorage.setItem("middle",middlename.value);
    localStorage.setItem("last",lastname.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("address",address.value);
    localStorage.setItem("number",phonenumber.value);
    localStorage.setItem("gender",gender.value);
    location.replace("cv.html");
}
document.getElementById("f_name").innerHTML=localStorage.getItem("first");
document.getElementById("m_name").innerHTML=localStorage.getItem("middle");
document.getElementById("l_name").innerHTML=localStorage.getItem("last");
document.getElementById("email").innerHTML=localStorage.getItem("email");
document.getElementById("address").innerHTML=localStorage.getItem("address");
document.getElementById("phonenumber").innerHTML=localStorage.getItem("number");
document.getElementById("gender").innerHTML=localStorage.getItem("gender");

// validation