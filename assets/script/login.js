let userPass = document.querySelector("#userPassword");
let eye = document.querySelector("#eye");
let eyeSlash = document.querySelector("#eye-slash");
let eyeBox = document.querySelector(".eye-box");
let username = document.querySelector("#userName");
let form = document.querySelector("form");
let validation = document.querySelector(".validation");
let error = document.querySelector(".text-danger");
let btn = document.querySelector("#btn");


eyeBox.addEventListener("click", mylogPassword = () => {
    if (userPass.type === "password"){
        userPass.type = "text"
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";
    } else {
        userPass.type = "password"
        eye.style.opacity = "1";
        eyeSlash.style.opacity = "0";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();


    validateForm();
  
});

function validateForm(){
    if(username.value.trim() === ""){
        usetError(username, "username is required")
    } else if(username.value.trim() != "admin"){
        usetError(username, "Incorrect username")
    } else {
        location.href = "admin.html"
    }

    if(userPass.value.trim() === ""){
        psetError(userPass, "password is required")
    } else if(userPass.value.trim() != "passwords"){
        psetError(userPass, "Incorrect password")
    }  else {
        location.href = "admin.html"  
    }

}

function usetError(element, errorMessage){
    let parent = element.parentElement;
    parent.classList.add("u-error");
    let spanu = document.querySelector("#user")
    spanu.textContent = errorMessage;

}
function psetError(element, errorMessage){
    let parent = element.parentElement;
    parent.classList.add("p-error");
    let spanp = document.querySelector("#pass")
    spanp.textContent = errorMessage;
}

username.addEventListener("change", () => {
    usetError(username, "")
    psetError(userPass, "")
})

// function validateForm() {

//     let message = ""
//     let passRegX = /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,12}$/;
//     let valid = "admin"


//     if (username.match(valid)){
//         alert("user valid");
//     } else {
//         alert("pass invalid");
//     }
//     let spanu = document.querySelector("#user")
//     spanu.textContent = message;

//     if (userPass.value.match(passRegX)) {
//         alert("pass valid");
//     } else if (userPass.value.match(/^(?=.*\d)(?=.*\W).{8,12}$/)) {
//         message.push("Password should have at least 1 upper case");
//     } else if (userPass.value.match(/^(?=.*[A-Z])(?=.*\W).{8,12}$/)) {
//         message.push("Password should have at least 1 numerical value");
//     } else if (userPass.value.match(/^(?=.*[A-Z])(?=.*\d).{8,12}$/)) {
//         message.push("Password should have at least 1 special character");
//     } else {
//         alert("pass invalid");
//     }
//     let spanp = document.querySelector("#pass")
//     spanp.innerHTML = message;
// }





  // if (username.value === ""){
    //     validation.classList.add("u-error");
    // } else {
    //     validation.classList.remove("u-error");
    // };

    // if (userPass.value.trim() === ""){
    //     validation.classList.add("p-error");
    // } else {
    //     validation.classList.remove("p-error");
    // };

    // if (userPass.value.trim() === "password" || "password1" || "password2"){
    //    alert("goods")
    // }else  {
    //     validation.classList.add("p-error");
    // } 




// function setSuccess(element){
//     let parent = element.parentElement;
//     if(parent.classList.contains("u-error")){
//         parent.classList.remove("u-error");
//     }
//     parent.classList.add("success")

// }
