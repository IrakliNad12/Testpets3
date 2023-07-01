
let cartinner = document.querySelector('.cartbody');
let addtoCartbuttons = document.querySelectorAll('.additemtocartbutton');
let cartIconNumber = document.querySelector('.numberofitems');
let itemsContainerParent = document.querySelector('.shopitemscontainer');

window.addEventListener('load', ()=>{
  if (sessionStorage.getItem('cartdata')) {
    cartData = JSON.parse(sessionStorage.getItem('cartdata'));
    sum = 0;
    cartData.forEach((item) =>{
      sum += item.quantity;
    })
    cartIconNumber.textContent = sum;
    let = cartItemsHtml = '';
    cartData.forEach((element) => {
      cartItemsHtml += `<div class="cart-item">
      <div class="cartimage-cont">
        <img src="${element.image}" alt="" />
      </div>
      <div class="cartitem-info">
        <p class="cartitem-name">${element.name}</p>
        <p class="cartitem-price">$${(element.price/100).toFixed(2)}</p>
        <div class="cart-item-input">
        <span class="cart-input-minus">-</span>
        <input type="text" value="${element.quantity}"/>
        <span class="cart-input-plus">+</span>
        </div>
      </div>
      <svg class="cart-item-closebutton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>`
    });
    let subTotal = 0;
    cartData.forEach((product)=>{
      subTotal += product.price*product.quantity;
    });
    cartinner.innerHTML = `<div class="cartItemsSubtotalButton">
    <div class="cartitems-cont">${cartItemsHtml}</div>
    <div class="subotal-Viewcart-cont">
    <div class="subtotalcalculator">
      <p class="subtotaltext">Subtotal</p>
      <p class="subtotal-result">$${(subTotal/100).toFixed(2)}</p>
    </div>
    <div class="cartfooter">
      <button>View Cart</button>
    </div>
    </div>
  </div>`;
  }
});

itemsContainerParent.addEventListener('click', (event)=>{
  if (event.target.classList.contains('additemtocartbutton')) {
        let itemImage = event.target.parentElement.firstElementChild.src;
        let itemPrice = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
        let itemPriceNumber = parseFloat(itemPrice.replace('$','')*100);
        let itemQuantity = event.target.previousElementSibling.querySelector('input').value;
        let itemQuantitynumber = Number(itemQuantity);
        let itemName = event.target.parentElement.querySelector('.improduct').textContent;
        let cartData = [];
        if (itemQuantitynumber>=1) {
            if (sessionStorage.getItem('cartdata')) {
              cartData = JSON.parse(sessionStorage.getItem('cartdata'));
            } 
            let matchingItem;
            cartData.forEach((item) =>{
              if(itemImage === item.image) {
                matchingItem = item;
              }
            });
            if (matchingItem) {
              matchingItem.quantity+=itemQuantitynumber;
            } else {
              cartData.push({
                image: itemImage,
                name: itemName,
                price: itemPriceNumber,
                quantity: itemQuantitynumber
              })
            }
            let stringcartData = JSON.stringify(cartData);
            sessionStorage.setItem('cartdata', stringcartData);
            let cartDatafromStorage = JSON.parse(sessionStorage.getItem('cartdata'));
            let sum = 0;
            cartDatafromStorage.forEach((item)=>{
              sum+=item.quantity;
              let = FirscartItemsHtml = '';
              cartDatafromStorage.forEach((element) => {
              FirscartItemsHtml += `<div class="cart-item">
              <div class="cartimage-cont">
                <img src="${element.image}" alt="" />
              </div>
              <div class="cartitem-info">
                <p class="cartitem-name">${element.name}</p>
                <p class="cartitem-price">$${(element.price/100).toFixed(2)}</p>
                <div class="cart-item-input">
                <span class="cart-input-minus">-</span>
                <input type="text" value="${element.quantity}"/>
                <span class="cart-input-plus">+</span>
                </div>
              </div>
              <svg class="cart-item-closebutton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>`
            let subTotal = 0;
            cartDatafromStorage.forEach((product)=>{
              subTotal += product.price*product.quantity;
            });
            cartinner.innerHTML = `<div class="cartItemsSubtotalButton">
            <div class="cartitems-cont">${FirscartItemsHtml}</div>
            <div class="subotal-Viewcart-cont">
            <div class="subtotalcalculator">
              <p class="subtotaltext">Subtotal</p>
              <p class="subtotal-result">$${(subTotal/100).toFixed(2)}</p>
            </div>
            <div class="cartfooter">
              <button>View Cart</button>
            </div>
            </div>
          </div>`;
            });
            })
            cartIconNumber.textContent=sum;
            cartElement.classList.add('activecart');
      } else {
        alert('enter amount');
      }
  }
});


cartinner.addEventListener('click',(event)=>{
  let deleteItembutton = event.target;
  if (deleteItembutton.classList.contains('cart-item-closebutton')) {
    let cartdataAfterX = JSON.parse(sessionStorage.getItem('cartdata'));
    if (cartdataAfterX.length===1) {
      sessionStorage.removeItem('cartdata');
      cartinner.innerHTML = `<p class="emptytext">Cart is empty</p>`;
      cartIconNumber.textContent = '0';
    } else {
     let indexOfclicked = cartdataAfterX.findIndex((i)=>{
      return i.image === deleteItembutton.parentElement.firstElementChild.firstElementChild.src;
     })
     cartdataAfterX.splice(indexOfclicked, 1);
     sessionStorage.setItem('cartdata', JSON.stringify(cartdataAfterX));
     let = cartItemsHtmlafterX = '';
     cartdataAfterX.forEach((element) => {
      cartItemsHtmlafterX += `<div class="cart-item">
      <div class="cartimage-cont">
        <img src="${element.image}" alt="" />
      </div>
      <div class="cartitem-info">
        <p class="cartitem-name">${element.name}</p>
        <p class="cartitem-price">$${(element.price/100).toFixed(2)}</p>
        <div class="cart-item-input">
        <span class="cart-input-minus">-</span>
        <input type="text" value="${element.quantity}"/>
        <span class="cart-input-plus">+</span>
        </div>
      </div>
      <svg class="cart-item-closebutton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>`
    });
    let subTotalX = 0;
    cartdataAfterX.forEach((product)=>{
      subTotalX += product.price*product.quantity;
    });
    cartinner.innerHTML = `<div class="cartItemsSubtotalButton">
    <div class="cartitems-cont">${cartItemsHtmlafterX}</div>
    <div class="subotal-Viewcart-cont">
    <div class="subtotalcalculator">
      <p class="subtotaltext">Subtotal</p>
      <p class="subtotal-result">$${(subTotalX/100).toFixed(2)}</p>
    </div>
    <div class="cartfooter">
      <button>View Cart</button>
    </div>
    </div>
  </div>`;
  sumX = 0;
  cartdataAfterX.forEach((item) =>{
    sumX += item.quantity;
  })
  cartIconNumber.textContent = sumX;  
    }
  } else if (deleteItembutton.classList.contains('cart-input-plus')) {
    let cartDataplus = JSON.parse(sessionStorage.getItem('cartdata'));
    let indexOfclickedplus = cartDataplus.findIndex((i)=>{
      return i.image === event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src;
     })
     cartDataplus[indexOfclickedplus].quantity++;
     sessionStorage.setItem('cartdata', JSON.stringify(cartDataplus));
     let = cartItemsPlusHtml = '';
     cartDataplus.forEach((element) => {
      cartItemsPlusHtml += `<div class="cart-item">
      <div class="cartimage-cont">
        <img src="${element.image}" alt="" />
      </div>
      <div class="cartitem-info">
        <p class="cartitem-name">${element.name}</p>
        <p class="cartitem-price">$${(element.price/100).toFixed(2)}</p>
        <div class="cart-item-input">
        <span class="cart-input-minus">-</span>
        <input type="text" value="${element.quantity}"/>
        <span class="cart-input-plus">+</span>
        </div>
      </div>
      <svg class="cart-item-closebutton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>`
    });
    let subTotalPlus = 0;
    cartDataplus.forEach((product)=>{
      subTotalPlus += product.price*product.quantity;
    });
    cartinner.innerHTML = `<div class="cartItemsSubtotalButton">
    <div class="cartitems-cont">${cartItemsPlusHtml}</div>
    <div class="subotal-Viewcart-cont">
    <div class="subtotalcalculator">
      <p class="subtotaltext">Subtotal</p>
      <p class="subtotal-result">$${(subTotalPlus/100).toFixed(2)}</p>
    </div>
    <div class="cartfooter">
      <button>View Cart</button>
    </div>
    </div>
  </div>`;
   sumPlus = 0;
   cartDataplus.forEach((item) =>{
    sumPlus += item.quantity;
  })
  cartIconNumber.textContent = sumPlus; 
  }  else if (deleteItembutton.classList.contains('cart-input-minus')) {
    let cartDataminus = JSON.parse(sessionStorage.getItem('cartdata'));
    let indexOfclickedminus = cartDataminus.findIndex((i)=>{
      return i.image === event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src;
     })
     if (cartDataminus[indexOfclickedminus].quantity>1) {
      cartDataminus[indexOfclickedminus].quantity--;
     sessionStorage.setItem('cartdata', JSON.stringify(cartDataminus));
     let = cartItemsMinusHtml = '';
     cartDataminus.forEach((element) => {
      cartItemsMinusHtml += `<div class="cart-item">
      <div class="cartimage-cont">
        <img src="${element.image}" alt="" />
      </div>
      <div class="cartitem-info">
        <p class="cartitem-name">${element.name}</p>
        <p class="cartitem-price">$${(element.price/100).toFixed(2)}</p>
        <div class="cart-item-input">
        <span class="cart-input-minus">-</span>
        <input type="text" value="${element.quantity}"/>
        <span class="cart-input-plus">+</span>
        </div>
      </div>
      <svg class="cart-item-closebutton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>`
    });
    let subTotalMinus = 0;
    cartDataminus.forEach((product)=>{
      subTotalMinus += product.price*product.quantity;
    });
    cartinner.innerHTML = `<div class="cartItemsSubtotalButton">
    <div class="cartitems-cont">${cartItemsMinusHtml}</div>
    <div class="subotal-Viewcart-cont">
    <div class="subtotalcalculator">
      <p class="subtotaltext">Subtotal</p>
      <p class="subtotal-result">$${(subTotalMinus/100).toFixed(2)}</p>
    </div>
    <div class="cartfooter">
      <button>View Cart</button>
    </div>
    </div>
  </div>`;
   sumMinus = 0;
   cartDataminus.forEach((item) =>{
    sumMinus += item.quantity;
  })
  cartIconNumber.textContent = sumMinus;
     }
      
  }
  
});

