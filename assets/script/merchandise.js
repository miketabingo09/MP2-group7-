// /fill up form
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let emailAddress = document.querySelector("#emailAddress");
let radio = document.querySelectorAll("#rock")
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

let orderList = [];

// buttons
let addToCart1 = document.querySelector("#addToCart1");
let addToCart2 = document.querySelector("#addToCart2");
let addToCart3 = document.querySelector("#addToCart3");
let addToCart4 = document.querySelector("#addToCart4");
let addToCart5 = document.querySelector("#addToCart5");
let addToCart6 = document.querySelector("#addToCart6");

let quantity = 1;

//Add to cart functions button 
addToCart1.addEventListener("click", addBtn1 = () =>  {
  let quantity = 1;
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
  let price1 = 1525.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/image8.jpeg';

  //adding text of item name
  name.innerHTML = "Bearista Bear Happy Giraffe";

  //adding text description
  descrip.innerHTML = "A cute bear";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price1;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price1;
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
    totalItems -= price1;
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
    let remTotal = price1 *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

 

  let proceeds = () => {
    let totals = price1 *= quantity;

    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }

    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })

addToCart2.addEventListener("click", addBtn2 = () =>  {
  let quantity = 1;
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
  let price2 = 436.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/item3.jpeg';

  //adding text of item name
  name.innerHTML = "Mug 14oz Been There Series Baguio";

  //adding text description
  descrip.innerHTML = "A collectible items for those who have memories in baguio";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price2;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price2;
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
    totalItems -= price2;
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
    let remTotal = price2 *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

 

  let proceeds = () => {
    let totals = price2 *= quantity;
    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }
    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })

addToCart3.addEventListener("click", addBtn3 = () =>  {
  let quantity = 1;
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
  let price3 = 436.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/item4.jpeg';

  //adding text of item name
  name.innerHTML = "Mug 14oz Been There Series Davao";

  //adding text description
  descrip.innerHTML = "A collectible items for those who have memories in davao";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price3;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price3;
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
    totalItems -= price3;
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

 

  let proceeds = () => {
    let totals = price3 *= quantity;

    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }
    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })


addToCart4.addEventListener("click", addBtn4 = () =>  {
  let quantity = 1;
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
  let price4 = 556.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/item5.jpeg';

  //adding text of item name
  name.innerHTML = "Tumbler 16oz Been There Series Boracay";

  //adding text description
  descrip.innerHTML = "Good collectible item that is made from boracay";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price4;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price4;
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
    totalItems -= price4;
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
    let remTotal = price4 *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

 

  let proceeds = () => {
    let totals = price4 *= quantity;

    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }
    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })


addToCart5.addEventListener("click", addBtn5 = () =>  {
  let quantity = 1;
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
  let price5 = 556.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/item6.jpeg';

  //adding text of item name
  name.innerHTML = "Tumbler 16oz Been There Series Manila";

  //adding text description
  descrip.innerHTML = "Good collectible item that is made from manila";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price5;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price5;
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
    totalItems -= price5;
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
    let remTotal = price5 *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

 

  let proceeds = () => {
    let totals = price5 *= quantity;

    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }
    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })


addToCart6.addEventListener("click", addBtn6 = () =>  {
  let quantity = 1;
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
  let price6 = 845.00;  
  let remBtn = document.createElement("button");
 

  //set attribute to checkbox
  

  //creating element image
  let image = document.createElement('img');

  //adding src
  image.src = 'assets/images/item7.jpeg';

  //adding text of item name
  name.innerHTML = "Mug 3oz Ceramic Giraffe Happy Giraffe";

  //adding text description
  descrip.innerHTML = "a collectible items that is made from a cute giraffe";

  descrip.style.fontSize = "14px";

  //add classlist
  itemContainer.classList.add("row", "mb-5", "ms-5")
  checkImagesContainer.classList.add("col-lg-3", "d-flex")
  column2.classList.add("col-lg-7", "ms-5")
  name.classList.add("fw-bold", "fs-5");
  plusBtn.classList.add("ms-3", "border", "border-none", "fs-6", "px-2");
  minusBtn.classList.add("me-3", "border", "border-none", "fs-6", "px-2");
  imageContainer.classList.add("col-lg-12", "me-5")
  image.classList.add("col-lg-12")
  remBtn.classList.add("ms-5", "border", "border-none", "fs-6", "px-2");

  remBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  plusBtn.innerHTML = "+";
  displayQuantity.innerHTML = "0";
  minusBtn.innerHTML = "-";
  displayQuantity.style.fontSize = "15px"
  image.style.width = "150px";
  
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

  totals.innerHTML = totalItems += price6;
  displayQuantity.innerHTML = quantity;

  if(displayQuantity.innerHTML == 1) {
    minusBtn.setAttribute("disabled", "");
  }

  let add = () => {
    totalItems += price6;
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
    totalItems -= price6;
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
    let remTotal = price6 *= quantity
    totals.innerHTML = totalItems -= remTotal;
   }

 

  let proceeds = () => {
    let totals = price6 *= quantity;

    let orders = {
      Firstname: firstName.value,
      Lastname: lastName.value,
      email: emailAddress.value,
      PaymentMethod: radio.value,
      id: 1,
      itemName: name.innerHTML,
      prices: totals,
      qty: quantity,
    }
    orderList.push(orders);
    localStorage.setItem("ordersmerch", JSON.stringify(orderList));
  }

  proceedBtn.addEventListener("click", proceeds);
  plusBtn.addEventListener("click", add);
  minusBtn.addEventListener("click", minus);
  remBtn.addEventListener("click", remove);
  })

