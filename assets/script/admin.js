// let paragraph = document.querySelector("#paragraph");
// let reservation = document.querySelector("#reservation")

// let params = new URLSearchParams(window.location.search);
// let i = 0;
// i++;
// if(params.forEach((value, key) => {
//     paragraph.append(`${key} = ${value}`);
//     paragraph.append(document.createElement('br'))
// })){
//    reservation.innerHTML = i 
// } else {
//     reservation.innerHTML = i 
// }

// const input = document.querySelector("#full-name");
// const h2 = document.querySelector("#name-display");

// input.addEventListener("keyup", display);

// function display() {
//     h2.innerHTML = input.value;
// }


// console.log(window.localStorage.getItem('FullName', userName));
let reservation = document.querySelector("#reservation");
let customer = JSON.parse(localStorage.getItem("Customer"));

// console.log(customer)
let cTable = document.querySelector("#cTable");
let tr = document.querySelector("tr")

let noCustomer = () => {
    let cRow = document.createElement("tr")
    let cData = document.createElement("td");
    cData.colSpan = "3";
    cData.textContent = "No Reservations";
    cRow.id = "noData";

    cTable.appendChild(cRow);
    cRow.appendChild(cData);
}

// display
if (customer == null || customer == 0) {
    noCustomer();
} else {
    for (let i in customer) {
        let cRow = document.createElement("tr")
        
        let cData = document.createElement("td");
        let email = document.createElement("td");
        let number = document.createElement("td");
        let eStyle = document.createElement("td");
        let nEvent = document.createElement("td");
        let date = document.createElement("td");
        let attendees = document.createElement("td");
        let sTime = document.createElement("td");
        let eTime = document.createElement("td");
        let message = document.createElement("td");
        let delData = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.addEventListener("click", deleteTask);
        delBtn.classList.add("rounded")
    
      

        cRow.id = customer[i].id;
        cData.textContent = customer[i].Fullname;
        email.textContent = customer[i].Email;
        number.textContent = customer[i].ContactNumber;
        // eStyle.textContent = customer[i].EventStyle;
        nEvent .textContent = customer[i].EventDetails;
        date .textContent = customer[i].Date;
        attendees.textContent = customer[i].Attendees;
        sTime .textContent = customer[i].StartTime;
        eTime.textContent = customer[i].EndTime;
        message.textContent = customer[i].Message;
        delBtn.textContent = "Delete";

        if (customer[i].EventStyle == "1"){
            eStyle.textContent = "On Premises"
        } else if (customer[i].EventStyle == "2") {
            eStyle.textContent = "Dropoff Catering"
        } else if (customer[i].EventStyle == "3") {
            eStyle.textContent = "Pickup Catering"
        } else if (customer[i].EventStyle == "4") {
            eStyle.textContent = "Fullservice Catering"
        }
        

        cTable.appendChild(cRow);
        cRow.appendChild(cData);
        cRow.appendChild(email);
        cRow.appendChild(number);
        cRow.appendChild(eStyle);
        cRow.appendChild(nEvent);
        cRow.appendChild(date);
        cRow.appendChild(attendees);
        cRow.appendChild(sTime);
        cRow.appendChild(eTime);
        cRow.appendChild(message);
        cRow.appendChild(delData);
        delData.appendChild(delBtn);

    }
}

function deleteTask() {
    let tr = event.target.parentNode.parentNode;
    let rowId = tr.id;

    tr.remove();

    // filter removes all entries that are equal to the ID
    customer = customer.filter((obj) => obj.id != rowId);

    // update to filtered entries
    localStorage.setItem("Customer", JSON.stringify(customer));

    if (customer.length == 0) {
        noCustomer();
    }
}


// merchandise
let reservationmerch = document.querySelector("#Merchandise");

let ordersmerch = JSON.parse(localStorage.getItem("ordersmerch"));

let cTablemerch = document.querySelector("#mTable");

let noCustomermerch = () => {
    let cRowmerch = document.createElement("tr")
    let cDatamerch = document.createElement("td");
    cDatamerch.colSpan = "3";
    cDatamerch.textContent = "No Orders";
    cRowmerch.id = "noData";
    cTablemerch.appendChild(cRowmerch);
    cRowmerch.appendChild(cDatamerch);
}

// display
if (  ordersmerch == null ||  ordersmerch == 0) {
    noCustomermerch();
} else {

    for (let i in  ordersmerch) {

        let cRowmerch = document.createElement("tr")
        let cfnamemerch = document.createElement("td");
        let clnamemerch = document.createElement("td");
        let emailsmerch = document.createElement("td");
        let quantitiesmerch = document.createElement("td");
        let itemSmerch = document.createElement("td");
        let totalPricemerch = document.createElement("td");
        let removeBtnmerch = document.createElement("button");
        removeBtnmerch.classList.add("rounded");
    
     
        cfnamemerch.textContent =  ordersmerch[i].Firstname;
        clnamemerch.textContent = ordersmerch[i].Lastname;
        emailsmerch.textContent =  ordersmerch[i].email;
        quantitiesmerch.textContent = ordersmerch[i].qty;
        itemSmerch.textContent = ordersmerch[i].itemName;
        totalPricemerch.textContent = ordersmerch[i].prices;

        removeBtnmerch.innerHTML = "Delete";
  
        cTablemerch.appendChild(cRowmerch);
        cRowmerch.appendChild(cfnamemerch);
        cRowmerch.appendChild(clnamemerch);
        cRowmerch.appendChild(emailsmerch);
        cRowmerch.appendChild(quantitiesmerch);
        cRowmerch.appendChild(itemSmerch);
        cRowmerch.appendChild(totalPricemerch);
        cRowmerch.appendChild(removeBtnmerch)

        localStorage.setItem("ordersmerch", JSON.stringify(ordersmerch));
        

        JSON.parse(localStorage.getItem(ordersmerch));


        let deleteItem = () => {
            cRowmerch.remove();

            
        }

        removeBtnmerch.addEventListener("click", deleteItem)
    }
   
}   


// Order Online

let neworders = JSON.parse(localStorage.getItem("orderList"));

let oTable = document.querySelector("#oTable");

let onoCustomer = () => {
    let cRow = document.createElement("tr")
    let cData = document.createElement("td");
    cData.colSpan = "3";
    cData.textContent = "No Orders";
    cRow.id = "noData";
    oTable.appendChild(cRow);
    cRow.appendChild(cData);
}

// display
if ( neworders== null || neworders  == 0) {
    onoCustomer();
} else {

    for (let i in neworders) {

        let Rows = document.createElement("tr")
        let Data = document.createElement("td");
        let emails = document.createElement("td");
        let Address = document.createElement("td");
        let zipcodes = document.createElement("td");
        let quantities = document.createElement("td");
        let itemS = document.createElement("td");
        let totalPrice = document.createElement("td");
        let taskrows = document.createElement("td");
        let removeBtn = document.createElement("button");
        let paymentmethod = document.createElement("td");
     
        let rowsId = neworders[i].id;

        
        taskrows.textContent = rowsId;
        paymentmethod.textContent = neworders[i].paymentMethods;
        Data.textContent =  neworders[i].firstName + " " + neworders[i].lastName;
        emails.textContent =  neworders[i].emailLAddress;
        Address.textContent = neworders[i].Useraddress;
        zipcodes.textContent = neworders[i].zipcode;
        quantities.textContent = neworders[i].qty;
        itemS.textContent = neworders[i].itemName;
        totalPrice.textContent = neworders[i].prices;

        removeBtn.innerHTML = "Delete";
      
      
        oTable.appendChild(Rows);
        Rows.appendChild(Data);
        Rows.appendChild(emails);
        Rows.appendChild(Address);
        Rows.appendChild(zipcodes);
        Rows.appendChild(quantities);
        Rows.appendChild(itemS);
        Rows.appendChild(totalPrice);
        Rows.appendChild(paymentmethod);
        Rows.appendChild(taskrows)
        Rows.appendChild(removeBtn)

        localStorage.setItem("neworders", JSON.stringify(neworders));
        
        JSON.parse(localStorage.getItem(neworders));
        

        let deleteItem = () => {
            let tr = event.target.parentNode.parentNode;
            let trId = rowsId;
            Rows.remove();

            neworders = neworders.filter((obj) => obj.id != trId);

            localStorage.setItem("neworders", JSON.stringify(neworders));
            
        }

        removeBtn.addEventListener("click", deleteItem)
    }
   
}   




















// reservation.innerHTML = customer;

   
