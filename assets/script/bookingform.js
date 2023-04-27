
// let nameError = document.querySelector(".nameError");
// let submitBtn = document.querySelector("#submitBtn");
// let submit = document.querySelector("#submit");

// submit.addEventListener("click", nameFunction)

// // submitBtn.addEventListener("click", nameFunction);

// function nameFunction() {
//     let userName = userName.value;

//     if(userName.length == 0) {
//         nameError.innerHTML = "Name is required";
//         return false;
//     }
//     if(!userName.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*&$/)) {
//         nameError.innerHTML = "Write full name";
//         return false;
//     } else if (userName.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*&$/)) {
//         nameError.innerHTML = "valid"
//         return true;
//     }
// }
// validateName();

// let form = document.querySelector("#account-form");
// let userName = document.querySelector("#userName");
// let validation = document.querySelector(".validation");


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
  

//     validateForm()
// });

// function validateForm() {
//     if(userName.value.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*&$/)){
//         validation.classList.add(`success`);
//     } else {
//         validation.classList.add('error');
//     }
// }

let customerList = JSON.parse(localStorage.getItem("Customer"));


let form = document.querySelector("form");

form.addEventListener("submit", submitFunction = (e) => {
    e.preventDefault();


    let userName = document.querySelector("#userName").value;
    let userEmail = document.querySelector("#userEmail").value;
    let userNum = document.querySelector("#userNum").value;
    let userEvent = document.querySelector("#userEvent").value;
    let userEventDetails = document.querySelector("#userEventDetails").value;
    let userDate = document.querySelector("#userDate").value;
    let userPeople = document.querySelector("#userPeople").value;
    let usersTime = document.querySelector("#usersTime").value;
    let usereTime = document.querySelector("#usereTime").value;
    let userMessage = document.querySelector("#userMessage").value;

    let customer = {
        Fullname: userName,
        Email: userEmail,
        ContactNumber: userNum,
        EventStyle: userEvent,
        EventDetails: userEventDetails,
        Date: userDate,
        Attendees: userPeople,
        StartTime: usersTime,
        EndTime: usereTime,
        Message: userMessage
    }


    // let fd = new FormData(form);

    if (userName == "" || userEmail == "" || userNum == "" || userEvent == "" || userEventDetails == "" || userDate == "" || userPeople == "" || usersTime == "" || usereTime == "" || userMessage == "") { 
        swal("Opps..!", "Input field must be fill!", "error");
    } else {
        swal("Great!", "You have booked your event successfully!", "success");
    }
    
    if (customerList == null || customerList == 0) {
        customerList = [];
    }    
    customerList.push(customer);
    localStorage.setItem("Customer", JSON.stringify(customerList));
    
});




// console.log(customer);

// localStorage.setItem('FullName', userName);
// localStorage.setItem('Email', userEmail);
// localStorage.setItem('ContactNumber', userNum);
// localStorage.setItem('EventDetails', userEventDetails);
// localStorage.setItem('Date', userDate);
// localStorage.setItem('Attendees', userPeople);
// localStorage.setItem('StartTime', usersTime);
// localStorage.setItem('EndTime', usereTime);
// localStorage.setItem('Message', userMessage);






