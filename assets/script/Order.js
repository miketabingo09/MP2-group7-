
//link navigation bar
let feauturedBtn = document.querySelector("#feauturedBtn");
let brewedBtn = document.querySelector("#brewedBtn");
let espressoBtn = document.querySelector("#espressoBtn");
let beverageBtn = document.querySelector("#beverageBtn");
let closeBtn = document.querySelector("#closeBtn");
let modalClose = document.querySelector("#exampleModalToggle");
let gcash = document.querySelector("#gcash");
let paypal = document.querySelector("#paypal");
let cod = document.querySelector("#cod");

let paymentContainer = document.querySelector("#paymentContainer");

let payment = "";

//fill up form
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let emailAddress = document.querySelector("#emailAddress");
let stateOrProvince = document.querySelector("#stateOrProvince");
let zipCode = document.querySelector("#zipCode");


//display items in modal body
let displayItems = document.querySelector("#displayItems");

//proceed button
let proceedBtn = document.querySelector("#proceedBtn");

let totals = document.querySelector("#totals");




//display total 
let totalItems = 0;
let currentTotalOfItem = 0;

//forms
let forms = document.querySelector("#forms");

//buttons
let addToCart1 = document.querySelector("#addToCart1");
let addToCart2 = document.querySelector("#addToCart2");
let addToCart3 = document.querySelector("#addToCart3");
let addToCart4 = document.querySelector("#addToCart4");
let addToCart7 = document.querySelector("#addToCart7");
let addToCart8 = document.querySelector("#addToCart8");
let addToCart9 = document.querySelector("#addToCart9");
let addToCart10 = document.querySelector("#addToCart10");
let addToCart13 = document.querySelector("#addToCart13");
let addToCart14 = document.querySelector("#addToCart14");
let addToCart15 = document.querySelector("#addToCart15");
let addToCart16 = document.querySelector("#addToCart16");
let addToCart17 = document.querySelector("#addToCart17");





let orderList = JSON.parse(localStorage.getItem("orderList"));

let quantity = 1;
//Add to cart functions button 

paymentContainer.addEventListener("click", (e) => {
  if(e.target.id == "gcash") {
    payment = e.target.value
    console.log(e.target.value);
  } 
  if(e.target.id == "paypal") {
    payment = e.target.value
  }

  if(e.target.id == "cod") {
    payment = e.target.value
  }
})

let addBtn1 = () => {
  //create div elements
  let itemContainer = document.createElement("div");
  let checkImagesContainer = document.createElement("div");
  let checkBoxContainter = document.createElement("div");
  let imageContainer = document.createElement("div");
  let column2 = document.createElement("div");
  let name = document.createElement("p");
  let descrip = document.createElement("p");
  let productQuantity = document.createElement("div");
  let quantityText = document.createElement("p");
  let plusBtn = document.createElement("button");
  let displayQuantity = document.createElement("span");
  let minusBtn = document.createElement("button");
  let price = 200;  
  let remBtn = document.createElement("button");
 
  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/image/featured-drink-1-removebg-preview.png';

  //adding text of item name
  name.innerHTML = "Okayama Peach Apple Cold Brew";

  //adding text description
  descrip.innerHTML = "Sip on the Okayama Peach Apple Cold Brew for that ultimate vacation feeling this summer. A perfect summertime pick-me-up blending a refreshing mix of peach apple sauce and lemonade, infused with a slow-steeped cold brew for a smooth feeling.";

  descrip.style.fontSize = "17px";

  //add classlist
  itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
  checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
  column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
  name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
  imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
  image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
  remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "20px"
 
  
  //append child modal body
  displayItems.appendChild(itemContainer);
  itemContainer.appendChild(checkImagesContainer);
  checkImagesContainer.appendChild(checkBoxContainter);
  checkImagesContainer.appendChild(imageContainer);
  imageContainer.appendChild(image);
  itemContainer.appendChild(column2);
  column2.appendChild(name)
  column2.appendChild(descrip);
  column2.appendChild(productQuantity);
  productQuantity.appendChild(quantityText)
  productQuantity.appendChild(minusBtn)
  productQuantity.appendChild(displayQuantity)
  productQuantity.appendChild(plusBtn)
  productQuantity.appendChild(remBtn);

  totals.innerHTML = totalItems += price;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price;
    totals.innerHTML = totalItems;
    quantity++;
    displayQuantity.innerHTML = quantity;
    if(displayQuantity.innerHTML > 9) {
      plusBtn.setAttribute("disabled", "");
    } else {
      minusBtn.removeAttribute("disabled");
    }
  }

  let minus = () => {
    totalItems -= price;
    totals.innerHTML = totalItems;
    quantity--;
    displayQuantity.innerHTML = quantity;
    
    if(displayQuantity.innerHTML == 1) {
      minusBtn.setAttribute("disabled", "");
    } else {
     plusBtn.removeAttribute("disabled");
    }
   
  }

  let remove = () => {
    itemContainer.remove() 
    let remTotal = price *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

   
   if(orderList == null) {
    orderList = [];
   }  

   

   let proceeds = () => {

    let totals = price *= quantity;

    let n = localStorage.getItem("idVal");
    n = ++n;     

      
    let orders = {

      firstName: firstName.value,
      lastName: lastName.value,
      emailLAddress: emailAddress.value,
      Useraddress: stateOrProvince.value,
      paymentMethods: payment,
      zipcode: zipCode.value,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
      id: n
    };
    orderList.push(orders);
    localStorage.setItem("orderList", JSON.stringify(orderList));
    localStorage.setItem("idVal", n);
    location.reload();
  };
  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
} 

let addBtn2 = () => {
  

  //create div elements
  let itemContainer = document.createElement("div");
  let checkImagesContainer = document.createElement("div");
  let checkBoxContainter = document.createElement("div");
  let imageContainer = document.createElement("div");
  let column2 = document.createElement("div");
  let name = document.createElement("p");
  let descrip = document.createElement("p");
  let productQuantity = document.createElement("div");
  let quantityText = document.createElement("p");
  let plusBtn = document.createElement("button");
  let displayQuantity = document.createElement("span");
  let minusBtn = document.createElement("button");
  let price = 200;  
  let remBtn = document.createElement("button");
 
  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/image/featured-drink-2-removebg-preview.png';

  //adding text of item name
  name.innerHTML = "Belgium Chocolate Frappuccino";

  //adding text description
  descrip.innerHTML = "Embrace summer with the Belgium Chocolate Coffee Frappuccino® blended beverage. This summer stunner features a blend of rich chocolate sauce and coffee, mixed with Belgium chocolate shavings for added texture. The beverage comes topped with chocolate whipped cream and more Belgium chocolate shavings for extreme chocolatey goodness.";

  descrip.style.fontSize = "17px";

  //add classlist
  itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
  checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
  column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
  name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
  imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
  image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
  remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "20px"
 
  
  //append child modal body
  displayItems.appendChild(itemContainer);
  itemContainer.appendChild(checkImagesContainer);
  checkImagesContainer.appendChild(checkBoxContainter);
  checkImagesContainer.appendChild(imageContainer);
  imageContainer.appendChild(image);
  itemContainer.appendChild(column2);
  column2.appendChild(name)
  column2.appendChild(descrip);
  column2.appendChild(productQuantity);
  productQuantity.appendChild(quantityText)
  productQuantity.appendChild(minusBtn)
  productQuantity.appendChild(displayQuantity)
  productQuantity.appendChild(plusBtn)
  productQuantity.appendChild(remBtn);

  totals.innerHTML = totalItems += price;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price;
    totals.innerHTML = totalItems;
    quantity++;
    displayQuantity.innerHTML = quantity;
    if(displayQuantity.innerHTML > 9) {
      plusBtn.setAttribute("disabled", "");
    } else {
      minusBtn.removeAttribute("disabled");
    }
  }

  let minus = () => {
    totalItems -= price;
    totals.innerHTML = totalItems;
    quantity--;
    displayQuantity.innerHTML = quantity;
    
    if(displayQuantity.innerHTML == 1) {
      minusBtn.setAttribute("disabled", "");
    } else {
     plusBtn.removeAttribute("disabled");
    }
   
  }

  let remove = () => {
    itemContainer.remove() 
    let remTotal = price *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

   
   let n = localStorage.getItem("idVal");
   n = ++n;

   
   if(orderList == null) {
    orderList = [];
   }  

   let proceeds = () => {
    let totals = price *= quantity;

    

    let orders = {
      firstName: firstName.value,
      lastName: lastName.value,
      emailLAddress: emailAddress.value,
      Useraddress: stateOrProvince.value,
      paymentMethods: payment,
      zipcode: zipCode.value,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
      id: n
    };
    orderList.push(orders);
    localStorage.setItem("orderList", JSON.stringify(orderList));
    localStorage.setItem("idVal", n);
    location.reload();
  };

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
}

let addBtn3 = () => {
 
  //create div elements
  let itemContainer = document.createElement("div");
  let checkImagesContainer = document.createElement("div");
  let checkBoxContainter = document.createElement("div");
  let imageContainer = document.createElement("div");
  let column2 = document.createElement("div");
  let name = document.createElement("p");
  let descrip = document.createElement("p");
  let productQuantity = document.createElement("div");
  let quantityText = document.createElement("p");
  let plusBtn = document.createElement("button");
  let displayQuantity = document.createElement("span");
  let minusBtn = document.createElement("button");
  let price = 200;  
  let remBtn = document.createElement("button");
 
  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/image/featured-drink-3-removebg-preview.png';

  //adding text of item name
  name.innerHTML = "Belgium Chocolate Nitro Cold Brew";

  //adding text description
  descrip.innerHTML = "Make every sunny day count with the Belgium Chocolate Nitro Cold Brew. Enjoy the velvety combination of sweetened smooth coffee topped with creamy chocolate cream and dusted with Belgium chocolate shavings as you bask in summer fun.";

  descrip.style.fontSize = "17px";

  //add classlist
  itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
  checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
  column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
  name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
  imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
  image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
  remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "20px"
 
  
  //append child modal body
  displayItems.appendChild(itemContainer);
  itemContainer.appendChild(checkImagesContainer);
  checkImagesContainer.appendChild(checkBoxContainter);
  checkImagesContainer.appendChild(imageContainer);
  imageContainer.appendChild(image);
  itemContainer.appendChild(column2);
  column2.appendChild(name)
  column2.appendChild(descrip);
  column2.appendChild(productQuantity);
  productQuantity.appendChild(quantityText)
  productQuantity.appendChild(minusBtn)
  productQuantity.appendChild(displayQuantity)
  productQuantity.appendChild(plusBtn)
  productQuantity.appendChild(remBtn);

  totals.innerHTML = totalItems += price;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price;
    totals.innerHTML = totalItems;
    quantity++;
    displayQuantity.innerHTML = quantity;
    if(displayQuantity.innerHTML > 9) {
      plusBtn.setAttribute("disabled", "");
    } else {
      minusBtn.removeAttribute("disabled");
    }
  }

  let minus = () => {
    totalItems -= price;
    totals.innerHTML = totalItems;
    quantity--;
    displayQuantity.innerHTML = quantity;
    
    if(displayQuantity.innerHTML == 1) {
      minusBtn.setAttribute("disabled", "");
    } else {
     plusBtn.removeAttribute("disabled");
    }
   
  }

  let remove = () => {
    itemContainer.remove() 
    let remTotal = price *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

   
   
   if(orderList == null) {
    orderList = [];
   }  

   let proceeds = () => {
    let totals = price *= quantity;

    let n = localStorage.getItem("idVal");
    n = ++n;


    let orders = {
      firstName: firstName.value,
      lastName: lastName.value,
      emailLAddress: emailAddress.value,
      Useraddress: stateOrProvince.value,
      paymentMethods: payment,
      zipcode: zipCode.value,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
      id: n
    };
    orderList.push(orders);
    localStorage.setItem("orderList", JSON.stringify(orderList));
    localStorage.setItem("idVal", n);
    location.reload();
  };


  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
}

let addBtn4 = () => {
//create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/featured-drink-4-removebg-preview.png';

//adding text of item name
name.innerHTML = "Cantaloupe Melon Cream";

//adding text description
descrip.innerHTML = "Enjoy a piece of melon heaven with the Cantaloupe Cream Frappuccino blended beverage. A delectable combination of fruity melon syrup blended with milk and ice, layered on top of a splash of green-colored melon powder, resembling a slice of fresh cantaloupe. Topped with fluffy whipped cream, cantaloupe sauce drizzle and more melon chunks, each sip is refreshing all the way to the end.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}


// hot brewed coffee menu list

let addBtn7 = () => {
 //create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/brewed-1-removebg-preview.png';

//adding text of item name
name.innerHTML = "Iced Cappuccino";

//adding text description
descrip.innerHTML = "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}

let addBtn8 = () => {
 //create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/brewed-2-removebg-preview.png';

//adding text of item name
name.innerHTML = "Coffee Frappuccino";

//adding text description
descrip.innerHTML = "Coffee meets milk and ice in a blender for a rumble and tumble and together they create one of our original Frappuccino® beverages.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}

let addBtn9 = () => {
//create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/brewed-3-removebg-preview.png';

//adding text of item name
name.innerHTML = "Iced Caffe Latte";

//adding text description
descrip.innerHTML = "Our dark, rich espresso is combined with milk and served over ice.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}

let addBtn10 = () => {
 //create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/brewed-4-removebg-preview.png';

//adding text of item name
name.innerHTML = "Iced Caramel Macchiato";

//adding text description
descrip.innerHTML = "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with caramel drizzle for an oh-so-sweet finish.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}



//espresso drinks

let addBtn13 = () => {
  //create div elements
let itemContainer = document.createElement("div");
let checkImagesContainer = document.createElement("div");
let checkBoxContainter = document.createElement("div");
let imageContainer = document.createElement("div");
let column2 = document.createElement("div");
let name = document.createElement("p");
let descrip = document.createElement("p");
let productQuantity = document.createElement("div");
let quantityText = document.createElement("p");
let plusBtn = document.createElement("button");
let displayQuantity = document.createElement("span");
let minusBtn = document.createElement("button");
let price = 200;  
let remBtn = document.createElement("button");

//creating element image
let image = document.createElement('img');

//adding src
image.src = 'assets/image/espresso-1-removebg-preview.png';

//adding text of item name
name.innerHTML = "Caffe Misto";

//adding text description
descrip.innerHTML = "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.";

descrip.style.fontSize = "17px";

//add classlist
itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");

remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
plusBtn.innerHTML = "+";
displayQuantity.innerHTML = "0";
minusBtn.innerHTML = "-";
displayQuantity.style.fontSize = "20px"


//append child modal body
displayItems.appendChild(itemContainer);
itemContainer.appendChild(checkImagesContainer);
checkImagesContainer.appendChild(checkBoxContainter);
checkImagesContainer.appendChild(imageContainer);
imageContainer.appendChild(image);
itemContainer.appendChild(column2);
column2.appendChild(name)
column2.appendChild(descrip);
column2.appendChild(productQuantity);
productQuantity.appendChild(quantityText)
productQuantity.appendChild(minusBtn)
productQuantity.appendChild(displayQuantity)
productQuantity.appendChild(plusBtn)
productQuantity.appendChild(remBtn);

totals.innerHTML = totalItems += price;
displayQuantity.innerHTML = quantity;

if(displayQuantity.innerHTML == 1) {
  minusBtn.setAttribute("disabled", "");
}

let add = () => {
  totalItems += price;
  totals.innerHTML = totalItems;
  quantity++;
  displayQuantity.innerHTML = quantity;
  if(displayQuantity.innerHTML > 9) {
    plusBtn.setAttribute("disabled", "");
  } else {
    minusBtn.removeAttribute("disabled");
  }
}

let minus = () => {
  totalItems -= price;
  totals.innerHTML = totalItems;
  quantity--;
  displayQuantity.innerHTML = quantity;
  
  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  } else {
   plusBtn.removeAttribute("disabled");
  }
 
}

let remove = () => {
  itemContainer.remove() 
  let remTotal = price *= quantity
  totals.innerHTML = totalItems -= remTotal;
 }

 
 
 if(orderList == null) {
  orderList = [];
 }  

 let proceeds = () => {
  let totals = price *= quantity;

  let n = localStorage.getItem("idVal");
  n = ++n;


  let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
  };
  orderList.push(orders);
  localStorage.setItem("orderList", JSON.stringify(orderList));
  localStorage.setItem("idVal", n);
  location.reload();
};


proceedBtn.addEventListener("click", proceeds);
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
remBtn.addEventListener("click", remove);
}

let addBtn14 = () => {
 //create div elements
 let itemContainer = document.createElement("div");
 let checkImagesContainer = document.createElement("div");
 let checkBoxContainter = document.createElement("div");
 let imageContainer = document.createElement("div");
 let column2 = document.createElement("div");
 let name = document.createElement("p");
 let descrip = document.createElement("p");
 let productQuantity = document.createElement("div");
 let quantityText = document.createElement("p");
 let plusBtn = document.createElement("button");
 let displayQuantity = document.createElement("span");
 let minusBtn = document.createElement("button");
 let price = 200;  
 let remBtn = document.createElement("button");
 
 //creating element image
 let image = document.createElement('img');
 
 //adding src
 image.src = 'assets/image/espresso-2-removebg-preview.png';
 
 //adding text of item name
 name.innerHTML = "Flat White";
 
 //adding text description
 descrip.innerHTML = "Bold ristretto shots of espresso get the perfect amount of steamed whole milk to create a not too strong, not too creamy, just right flavor, finished with a beautiful dot";
 
 descrip.style.fontSize = "17px";
 
 //add classlist
 itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
 checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
 column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
 name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
 plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
 minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
 imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
 image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
 remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");
 
 remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 plusBtn.innerHTML = "+";
 displayQuantity.innerHTML = "0";
 minusBtn.innerHTML = "-";
 displayQuantity.style.fontSize = "20px"
 
 
 //append child modal body
 displayItems.appendChild(itemContainer);
 itemContainer.appendChild(checkImagesContainer);
 checkImagesContainer.appendChild(checkBoxContainter);
 checkImagesContainer.appendChild(imageContainer);
 imageContainer.appendChild(image);
 itemContainer.appendChild(column2);
 column2.appendChild(name)
 column2.appendChild(descrip);
 column2.appendChild(productQuantity);
 productQuantity.appendChild(quantityText)
 productQuantity.appendChild(minusBtn)
 productQuantity.appendChild(displayQuantity)
 productQuantity.appendChild(plusBtn)
 productQuantity.appendChild(remBtn);
 
 totals.innerHTML = totalItems += price;
 displayQuantity.innerHTML = quantity;
 
 if(displayQuantity.innerHTML == 1) {
   minusBtn.setAttribute("disabled", "");
 }
 
 let add = () => {
   totalItems += price;
   totals.innerHTML = totalItems;
   quantity++;
   displayQuantity.innerHTML = quantity;
   if(displayQuantity.innerHTML > 9) {
     plusBtn.setAttribute("disabled", "");
   } else {
     minusBtn.removeAttribute("disabled");
   }
 }
 
 let minus = () => {
   totalItems -= price;
   totals.innerHTML = totalItems;
   quantity--;
   displayQuantity.innerHTML = quantity;
   
   if(displayQuantity.innerHTML == 1) {
     minusBtn.setAttribute("disabled", "");
   } else {
    plusBtn.removeAttribute("disabled");
   }
  
 }
 
 let remove = () => {
   itemContainer.remove() 
   let remTotal = price *= quantity
   totals.innerHTML = totalItems -= remTotal;
  }
 
  
  
  if(orderList == null) {
   orderList = [];
  }  
 
  let proceeds = () => {
   let totals = price *= quantity;
 
   let n = localStorage.getItem("idVal");
   n = ++n;
 
 
   let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
   };
   orderList.push(orders);
   localStorage.setItem("orderList", JSON.stringify(orderList));
   localStorage.setItem("idVal", n);
   location.reload();
 };
 
 
 proceedBtn.addEventListener("click", proceeds);
 plusBtn.addEventListener("click", add);
 minusBtn.addEventListener("click", minus);
 remBtn.addEventListener("click", remove);
}

let addBtn15 = () => {
 //create div elements
 let itemContainer = document.createElement("div");
 let checkImagesContainer = document.createElement("div");
 let checkBoxContainter = document.createElement("div");
 let imageContainer = document.createElement("div");
 let column2 = document.createElement("div");
 let name = document.createElement("p");
 let descrip = document.createElement("p");
 let productQuantity = document.createElement("div");
 let quantityText = document.createElement("p");
 let plusBtn = document.createElement("button");
 let displayQuantity = document.createElement("span");
 let minusBtn = document.createElement("button");
 let price = 200;  
 let remBtn = document.createElement("button");
 
 //creating element image
 let image = document.createElement('img');
 
 //adding src
 image.src = 'assets/image/espresso-3-removebg-preview.png';
 
 //adding text of item name
 name.innerHTML = "Espresso";
 
 //adding text description
 descrip.innerHTML = "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.";
 
 descrip.style.fontSize = "17px";
 
 //add classlist
 itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
 checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
 column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
 name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
 plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
 minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
 imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
 image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
 remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");
 
 remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 plusBtn.innerHTML = "+";
 displayQuantity.innerHTML = "0";
 minusBtn.innerHTML = "-";
 displayQuantity.style.fontSize = "20px"
 
 
 //append child modal body
 displayItems.appendChild(itemContainer);
 itemContainer.appendChild(checkImagesContainer);
 checkImagesContainer.appendChild(checkBoxContainter);
 checkImagesContainer.appendChild(imageContainer);
 imageContainer.appendChild(image);
 itemContainer.appendChild(column2);
 column2.appendChild(name)
 column2.appendChild(descrip);
 column2.appendChild(productQuantity);
 productQuantity.appendChild(quantityText)
 productQuantity.appendChild(minusBtn)
 productQuantity.appendChild(displayQuantity)
 productQuantity.appendChild(plusBtn)
 productQuantity.appendChild(remBtn);
 
 totals.innerHTML = totalItems += price;
 displayQuantity.innerHTML = quantity;
 
 if(displayQuantity.innerHTML == 1) {
   minusBtn.setAttribute("disabled", "");
 }
 
 let add = () => {
   totalItems += price;
   totals.innerHTML = totalItems;
   quantity++;
   displayQuantity.innerHTML = quantity;
   if(displayQuantity.innerHTML > 9) {
     plusBtn.setAttribute("disabled", "");
   } else {
     minusBtn.removeAttribute("disabled");
   }
 }
 
 let minus = () => {
   totalItems -= price;
   totals.innerHTML = totalItems;
   quantity--;
   displayQuantity.innerHTML = quantity;
   
   if(displayQuantity.innerHTML == 1) {
     minusBtn.setAttribute("disabled", "");
   } else {
    plusBtn.removeAttribute("disabled");
   }
  
 }
 
 let remove = () => {
   itemContainer.remove() 
   let remTotal = price *= quantity
   totals.innerHTML = totalItems -= remTotal;
  }
 
  
  
  if(orderList == null) {
   orderList = [];
  }  
 
  let proceeds = () => {
   let totals = price *= quantity;
 
   let n = localStorage.getItem("idVal");
   n = ++n;
 
 
   let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
   };
   orderList.push(orders);
   localStorage.setItem("orderList", JSON.stringify(orderList));
   localStorage.setItem("idVal", n);
   location.reload();
 };
 
 
 proceedBtn.addEventListener("click", proceeds);
 plusBtn.addEventListener("click", add);
 minusBtn.addEventListener("click", minus);
 remBtn.addEventListener("click", remove);
}

let addBtn16 = () => {
 //create div elements
 let itemContainer = document.createElement("div");
 let checkImagesContainer = document.createElement("div");
 let checkBoxContainter = document.createElement("div");
 let imageContainer = document.createElement("div");
 let column2 = document.createElement("div");
 let name = document.createElement("p");
 let descrip = document.createElement("p");
 let productQuantity = document.createElement("div");
 let quantityText = document.createElement("p");
 let plusBtn = document.createElement("button");
 let displayQuantity = document.createElement("span");
 let minusBtn = document.createElement("button");
 let price = 200;  
 let remBtn = document.createElement("button");
 
 //creating element image
 let image = document.createElement('img');
 
 //adding src
 image.src = 'assets/image/espresso-4-removebg-preview.png';
 
 //adding text of item name
 name.innerHTML = "Espresso Macchiato";
 
 //adding text description
 descrip.innerHTML = "Our rich espresso marked with dollop of steamed milk and foam. A European-style classic.";
 
 descrip.style.fontSize = "17px";
 
 //add classlist
 itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
 checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
 column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
 name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
 plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
 minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
 imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
 image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
 remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");
 
 remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 plusBtn.innerHTML = "+";
 displayQuantity.innerHTML = "0";
 minusBtn.innerHTML = "-";
 displayQuantity.style.fontSize = "20px"
 
 
 //append child modal body
 displayItems.appendChild(itemContainer);
 itemContainer.appendChild(checkImagesContainer);
 checkImagesContainer.appendChild(checkBoxContainter);
 checkImagesContainer.appendChild(imageContainer);
 imageContainer.appendChild(image);
 itemContainer.appendChild(column2);
 column2.appendChild(name)
 column2.appendChild(descrip);
 column2.appendChild(productQuantity);
 productQuantity.appendChild(quantityText)
 productQuantity.appendChild(minusBtn)
 productQuantity.appendChild(displayQuantity)
 productQuantity.appendChild(plusBtn)
 productQuantity.appendChild(remBtn);
 
 totals.innerHTML = totalItems += price;
 displayQuantity.innerHTML = quantity;
 
 if(displayQuantity.innerHTML == 1) {
   minusBtn.setAttribute("disabled", "");
 }
 
 let add = () => {
   totalItems += price;
   totals.innerHTML = totalItems;
   quantity++;
   displayQuantity.innerHTML = quantity;
   if(displayQuantity.innerHTML > 9) {
     plusBtn.setAttribute("disabled", "");
   } else {
     minusBtn.removeAttribute("disabled");
   }
 }
 
 let minus = () => {
   totalItems -= price;
   totals.innerHTML = totalItems;
   quantity--;
   displayQuantity.innerHTML = quantity;
   
   if(displayQuantity.innerHTML == 1) {
     minusBtn.setAttribute("disabled", "");
   } else {
    plusBtn.removeAttribute("disabled");
   }
  
 }
 
 let remove = () => {
   itemContainer.remove() 
   let remTotal = price *= quantity
   totals.innerHTML = totalItems -= remTotal;
  }
 
  
  
  if(orderList == null) {
   orderList = [];
  }  
 
  let proceeds = () => {
   let totals = price *= quantity;
 
   let n = localStorage.getItem("idVal");
   n = ++n;
 
 
   let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
   };
   orderList.push(orders);
   localStorage.setItem("orderList", JSON.stringify(orderList));
   localStorage.setItem("idVal", n);
   location.reload();
 };
 
 
 proceedBtn.addEventListener("click", proceeds);
 plusBtn.addEventListener("click", add);
 minusBtn.addEventListener("click", minus);
 remBtn.addEventListener("click", remove);
}

let addBtn17 = () => {
 //create div elements
 let itemContainer = document.createElement("div");
 let checkImagesContainer = document.createElement("div");
 let checkBoxContainter = document.createElement("div");
 let imageContainer = document.createElement("div");
 let column2 = document.createElement("div");
 let name = document.createElement("p");
 let descrip = document.createElement("p");
 let productQuantity = document.createElement("div");
 let quantityText = document.createElement("p");
 let plusBtn = document.createElement("button");
 let displayQuantity = document.createElement("span");
 let minusBtn = document.createElement("button");
 let price = 200;  
 let remBtn = document.createElement("button");
 
 //creating element image
 let image = document.createElement('img');
 
 //adding src
 image.src = 'assets/image/espresso-5-removebg-preview.png';
 
 //adding text of item name
 name.innerHTML = "Cold Foam Iced Espresso";
 
 //adding text description
 descrip.innerHTML = "Ice-cold, rich espresso poured through creamy, cool nonfat milk Cold Foam.";
 
 descrip.style.fontSize = "17px";
 
 //add classlist
 itemContainer.classList.add("row", "mb-lg-5", "mb-md-5", "mb-sm-5", "ms-lg-4", "ms-md-4", "ms-sm-4",  "d-flex", "flex-lg-row", "flex-md-column", "col-lg-12", "col-md-12", "col-sm-12");
 checkImagesContainer.classList.add("col-lg-4", "col-md-6", "col-sm-6", "d-flex")
 column2.classList.add("col-lg-7", "ms-lg-5", "col-md-12", "col-sm-12", "col-md-7", "col-sm-7")
 name.classList.add("fw-bold", "fs-4", "col-md-12", "m-auto");
 plusBtn.classList.add("ms-3", "border", "border-none", "fs-6");
 minusBtn.classList.add("me-3", "border", "border-none", "fs-6");
 imageContainer.classList.add("col-lg-12", "me-5", "col-md-12", "col-sm-12", "me-lg-5")
 image.classList.add("col-lg-12", "col-md-12", "col-sm-12")
 remBtn.classList.add("ms-lg-5", "border", "border-none", "fs-6", "ms-md-5", "ms-sm-5");
 
 remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
 plusBtn.innerHTML = "+";
 displayQuantity.innerHTML = "0";
 minusBtn.innerHTML = "-";
 displayQuantity.style.fontSize = "20px"
 
 
 //append child modal body
 displayItems.appendChild(itemContainer);
 itemContainer.appendChild(checkImagesContainer);
 checkImagesContainer.appendChild(checkBoxContainter);
 checkImagesContainer.appendChild(imageContainer);
 imageContainer.appendChild(image);
 itemContainer.appendChild(column2);
 column2.appendChild(name)
 column2.appendChild(descrip);
 column2.appendChild(productQuantity);
 productQuantity.appendChild(quantityText)
 productQuantity.appendChild(minusBtn)
 productQuantity.appendChild(displayQuantity)
 productQuantity.appendChild(plusBtn)
 productQuantity.appendChild(remBtn);
 
 totals.innerHTML = totalItems += price;
 displayQuantity.innerHTML = quantity;
 
 if(displayQuantity.innerHTML == 1) {
   minusBtn.setAttribute("disabled", "");
 }
 
 let add = () => {
   totalItems += price;
   totals.innerHTML = totalItems;
   quantity++;
   displayQuantity.innerHTML = quantity;
   if(displayQuantity.innerHTML > 9) {
     plusBtn.setAttribute("disabled", "");
   } else {
     minusBtn.removeAttribute("disabled");
   }
 }
 
 let minus = () => {
   totalItems -= price;
   totals.innerHTML = totalItems;
   quantity--;
   displayQuantity.innerHTML = quantity;
   
   if(displayQuantity.innerHTML == 1) {
     minusBtn.setAttribute("disabled", "");
   } else {
    plusBtn.removeAttribute("disabled");
   }
  
 }
 
 let remove = () => {
   itemContainer.remove() 
   let remTotal = price *= quantity
   totals.innerHTML = totalItems -= remTotal;
  }
 
  
  
  if(orderList == null) {
   orderList = [];
  }  
 
  let proceeds = () => {
   let totals = price *= quantity;
 
   let n = localStorage.getItem("idVal");
   n = ++n;
 
 
   let orders = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailLAddress: emailAddress.value,
    Useraddress: stateOrProvince.value,
    paymentMethods: payment,
    zipcode: zipCode.value,
    itemName: name.innerHTML,
    prices: totals,
    qty: quantity,
    id: n
   };
   orderList.push(orders);
   localStorage.setItem("orderList", JSON.stringify(orderList));
   localStorage.setItem("idVal", n);
   location.reload();
 };
 
 
 proceedBtn.addEventListener("click", proceeds);
 plusBtn.addEventListener("click", add);
 minusBtn.addEventListener("click", minus);
 remBtn.addEventListener("click", remove);
}



//close button function
let closeButton = () => {
    displayItems.innerHTML = "";
      totalItems = 0;
      totals.innerHTML = totalItems;
      forms.reset();
}

//anchor tag function
let feauturedlink = (e) => {
 e.preventDefault();
  menu1.classList.remove("d-none");
  menu2.classList.add("d-none");
  menu3.classList.add("d-none");
}
let brewedlink = (q) => {
  q.preventDefault();
  menu2.classList.remove("d-none");
  menu1.classList.add("d-none");
  menu3.classList.add("d-none");
}

let espressoLink = (w) => {
  w.preventDefault();
  menu3.classList.remove("d-none");
  menu1.classList.add("d-none");
  menu2.classList.add("d-none");
  
}

//adding event listener to anchor tags
feauturedBtn.addEventListener("click", feauturedlink);
brewedBtn.addEventListener("click", brewedlink);
espressoBtn.addEventListener("click", espressoLink);

//adding event listener to add to cart button
addToCart1.addEventListener("click", addBtn1);
addToCart2.addEventListener("click", addBtn2);
addToCart3.addEventListener("click", addBtn3);
addToCart4.addEventListener("click", addBtn4);
addToCart7.addEventListener("click", addBtn7);
addToCart8.addEventListener("click", addBtn8);
addToCart9.addEventListener("click", addBtn9);
addToCart10.addEventListener("click", addBtn10);
addToCart13.addEventListener("click", addBtn13);
addToCart14.addEventListener("click", addBtn14);
addToCart15.addEventListener("click", addBtn15);
addToCart16.addEventListener("click", addBtn16);
addToCart17.addEventListener("click", addBtn17);

//adding event to close button
closeBtn.addEventListener("click", closeButton);

