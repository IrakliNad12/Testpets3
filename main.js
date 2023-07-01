let cartIcon = document.querySelector('.kalata');
let cartElement = document.querySelector('.cart');
let closecartButton = document.querySelector('.closecarticon');

// category and price dropdown accordion
let categoryButton = document.querySelector('.categorydropdown');
let categoryList = document.querySelector('.categorycontent');
let categoryPlusminus = document.querySelector('.categoryplusminus');
//price dropdown
let priceButton = document.querySelector('.pricedropdown');
let rangleSlider = document.querySelector('.sliderwrap');
let pricePlusminus = document.querySelector('.priceplusminus');

// shop item add to cart plus minus 
let shopItemminus = document.querySelectorAll('.minusbuttononitem');
let shopItemplus = document.querySelectorAll('.plusbuttononitem');
let shopIteminput = document.querySelectorAll('.itemnumberinput');
let shopItemContainerforPlus = document.querySelector('.shopitemscontainer');

//shopitem container
let shopItemsContainerForInputred = document.querySelector('.shopitemscontainer');

// cart expand
cartIcon.addEventListener('click', ()=>{
    cartElement.classList.add('activecart');
})

closecartButton.addEventListener('click', ()=> {
    cartElement.classList.remove('activecart');
})

//category dropdown


let plusminusswitch = true;
categoryButton.addEventListener('click', ()=>{
    if(categoryList.classList.contains('short-version')) {
        categoryList.classList.toggle('categorycontentreplaceshort');
        if (plusminusswitch) {
        categoryPlusminus.textContent = "-";
    } else {
        categoryPlusminus.textContent = "+";
    }
    plusminusswitch = !plusminusswitch;
    } else if (categoryList.classList.contains('long-version')) {
        categoryList.classList.toggle('categorycontentreplacelong');
        if (plusminusswitch) {
        categoryPlusminus.textContent = "-";
    } else {
        categoryPlusminus.textContent = "+";
    }
    plusminusswitch = !plusminusswitch;
    } else {
        categoryList.classList.toggle('categorycontentreplace');
        if (plusminusswitch) {
        categoryPlusminus.textContent = "-";
    } else {
        categoryPlusminus.textContent = "+";
    }
    plusminusswitch = !plusminusswitch;
    }
});



//  price dropdown
let plusminusprice = true;
priceButton.addEventListener('click', ()=>{
    rangleSlider.classList.toggle('sliderwrapreplace');
    if (plusminusprice) {
        pricePlusminus.textContent = "-";
    } else {
        pricePlusminus.textContent = "+";
    }
    plusminusprice = !plusminusprice;
})

// shop item add to cart plus minus number 

shopItemContainerforPlus.addEventListener('click', (event)=>{
    if (event.target.classList.contains('plusbuttononitem')) {
        event.target.previousElementSibling.value++;
    } else if (event.target.classList.contains('minusbuttononitem')) {
        if (event.target.nextElementSibling.value>1) {
            event.target.nextElementSibling.value--;
        }
    }
});



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

