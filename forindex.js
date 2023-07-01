let cartIcon = document.querySelector('.kalata');
let cartElement = document.querySelector('.cart');
let closecartButton = document.querySelector('.closecarticon');
let indexPlusButton = document.querySelectorAll('.plusbutton');
let indexMinusButton = document.querySelectorAll('.minusbutton');
let indexAddtocartButton = document.querySelectorAll('.bigaddtocartbutton');
let indexAddcartInput = document.querySelectorAll('.index-addcart-input');

// cart expand
cartIcon.addEventListener('click', ()=>{
    cartElement.classList.add('activecart');
})

closecartButton.addEventListener('click', ()=> {
    cartElement.classList.remove('activecart');
})

let hamburgerMenu = document.querySelector('.hamburger-menu');
let responsiveSidebar = document.querySelector('.responsive-sidebar');
let transparentBackground = document.querySelector(".transparent-background");

hamburgerMenu.addEventListener('click', ()=>{
    responsiveSidebar.classList.add('responsive-sidebar-active');
    transparentBackground.classList.add('transparent-background-active');
    responsiveSidebar.innerHTML=`<a href="./login.html">
    <div class="loginB">
      <svg
        data-bbox="0 0 50 50"
        data-type="shape"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <g>
          <path
            d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"
          ></path>
        </g>
      </svg>
      <span class="logintext">Log In</span>
    </div>
  </a>
  <i class="bi bi-x close-sidebar-button"></i>
  <div class="searchpart">
            <input type="text" class="searchinputbar" placeholder="Search..." />
            <button class="searchbuttonabove">
              <i class="bi bi-search" id="searchiconup"></i>
            </button>
          </div>
          <div class="downheaderleft">
          <ul>
            <li><a href="./shopall.html">SHOP ALL</a></li>
            <li><a href="./dogs.html">DOGS</a></li>
            <li><a href="./cats.html">CATS</a></li>
            <li><a href="./birds.html">BIRDS</a></li>
            <li><a href="./fish&aquatics.html">FISH & AQUATICS</a></li>
            <li><a href="./smallanimals.html">SMALL ANIMALS</a></li>
            <li><a href="./reptiles.html">REPTILES</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
          </ul>
        </div>`
});

responsiveSidebar.addEventListener('click', (event)=>{
    if (event.target.classList.contains('close-sidebar-button')) {
        responsiveSidebar.classList.remove('responsive-sidebar-active');
        transparentBackground.classList.remove('transparent-background-active');
    }
});

// plus minus button

indexPlusButton.forEach((button)=>{
  button.addEventListener('click', ()=>{
    button.previousElementSibling.value++;
  })
});


indexMinusButton.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if(button.nextElementSibling.value>1) {
      button.nextElementSibling.value--;
    }
  })
});

// add to cart

indexAddtocartButton.forEach((button) => {
  button.addEventListener('click', (event)=>{
    let itemImage = event.target.parentElement.firstElementChild.src;
    let itemPrice = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.textContent;
    let itemPriceNumber = parseFloat(itemPrice.replace('$','')*100);
    let itemQuantity = event.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
    let itemQuantitynumber = Number(itemQuantity);
    let itemName = event.target.parentElement.firstElementChild.nextElementSibling.textContent;
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
      alert("enter amount");
    }
  })
});  


indexAddcartInput.forEach((input)=>{
  input.addEventListener('keyup', (event)=>{
    if (!input.value>=1) {
      event.target.parentElement.style.borderColor='red';
    } else if (input.value>=1) {
      event.target.parentElement.style.borderColor='black';
    }
  })
});


