"use strict";

let cart = {};
let count = null;

function checkCart() {
  if (localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  console.log(cart);
}

function showCountCart() {
  count = 0
  for (let i in cart) {
    count += cart[i];
  }
  let cartCount = document.querySelector(".cart-count");
  if (cartCount) {
    cartCount.innerText = count;
  }
}

checkCart();
showCountCart();