"use strict";

let cardArr = [];

class ProductCard {
  constructor(id, name, price, category, myDescription, image, countInCart) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.myDescription = myDescription;
    this.image = image;
    this.countInCart = countInCart;
    this.fullPriceItem = price * countInCart;
    
    this.elem = document.createElement("div");
    this.elem.className = "col-3";
    this.elem.innerHTML = `
      <div class="card my-2">
        <div class="card-img-top card-image-div" style="background-image: url(${this.image})"></div>
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p>${this.price} руб.</p>
          <p class="card-text">${this.myDescription}</p>
          <div class="row justify-content-around">
            <button class="btn btn-secondary btn-sm plus-button m-1">+</button>
            <span class="count-cart"></span> 
            <button class="btnbtn-secondary btn-sm minus-button m-1">-</button>
            <button class="btn btn-danger btn-sm delete-button m-1">Удалить</button>
          </div>  
        </div>
      </div>
    `;
    let bodyCart = document.querySelector(".body-cart");
    bodyCart.append(this.elem);
    
    let plusButton  = this.elem.querySelector(".plus-button");
    plusButton.addEventListener("click", this.plusButton.bind(this));  // Привязывает переменную указанную в скобках как this фнутри функции
    let minusButton  = this.elem.querySelector(".minus-button");
    minusButton.addEventListener("click", this.minusButton.bind(this));
    let deleteButton  = this.elem.querySelector(".delete-button");
    deleteButton.addEventListener("click", this.deleteButton.bind(this));
    let countCart = this.elem.querySelector(".count-cart");
    countCart.innerText = this.countInCart;
    let fullPriceText = document.querySelector(".full-price-text");
  }
  
  countInCart() {
    let countCart = this.elem.querySelector(".count-cart");
    countCart.innerText = this.countInCart;
  }
  
  plusButton() {
    this.countInCart++;
    cart[this.id]++;
    this.fullPriceItem = this.countInCart * this.price;
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(this.countInCart);
    showCountCart();
    let countCart = this.elem.querySelector(".count-cart");
    countCart.innerText = this.countInCart;
    changeFullPrice()
  }
  
  minusButton() {
    if (this.countInCart > 1) {
      this.countInCart--;
      cart[this.id]--;
      this.fullPriceItem = this.countInCart * this.price;
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(this.countInCart);
      showCountCart();
      let countCart = this.elem.querySelector(".count-cart");
      countCart.innerText = this.countInCart;
      changeFullPrice()
    } else {
      this.deleteButton();
    }

  }
  
  deleteButton() {
    delete cart[this.id];
    localStorage.setItem('cart', JSON.stringify(cart));
    showCountCart();
    this.elem.remove();
    changeFullPrice();
    checkEmptyCart();
  }
}

function checkEmptyCart() {
  let emptyCart = document.querySelector(".empty-cart");
  let buyButton = document.querySelector(".buy");
  if (count) {
    emptyCart.style.display = "none";
    buyButton.style.display = "block";
  } else {
    emptyCart.style.display = "block";
    buyButton.style.display = "none";
  }
}

function getOneProduct() {
  for (let key in cart) {
    getProduct(key);
  }
}  

function getProduct(cartId) {
  let count = cart[cartId];
  fetch("getProducts.php?cart_id=" + cartId)
    .then((response) => {return response.json()})
    .then((result) => {
      for(let product of result) {
        let card = new ProductCard(product.id, product.name, product.price, product.category, product.my_description, product.image, count);
        console.log(card);
        cardArr.push(card);
        changeFullPrice();
      }
    })
}

function changeFullPrice() {
  let fullPriceText = document.querySelector(".full-price-text");
  let full = 0;
  for(let i=0; i<cardArr.length; i++) {
    full += +cardArr[i].fullPriceItem;
  }
  fullPriceText.innerText = full;
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", getBuy);
    
function getBuy(){
  window.location.href='buy.php';
}



checkEmptyCart();
getOneProduct();
console.log(cardArr);







// function getCartId() {
//   let arr = [];
//   for (let key in cart) {
//     arr.push(key);
//   }
//   let strCartId = arr.join(', ');
//   console.log(strCartId);
//   console.log(typeof(strCartId));
//   return strCartId;
// }

//let cartId = getCartId();

//let cartId = 7;

//getProduct(cartId);