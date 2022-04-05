"use strict";

class ProductCard {
  constructor(id, name, price, category, myDescription, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.myDescription = myDescription;
    this.image = image;
    
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
            <button class="btn btn-secondary btn-sm more-button m-1">Подробное</button>
            <button class="btn btn-primary btn-sm buy-button m-1" data-id="${this.id}">Купить</button>
          </div>  
        </div>
      </div>
    `;
    let catalog = document.querySelector(".catalog");
    catalog.append(this.elem);
    
    let moreButton = this.elem.querySelector(".more-button");
    moreButton.addEventListener("click", this.showMoreInfo.bind(this));  // Привязывает переменную указанную в скобках как this внутри функции
    let buyButton = this.elem.querySelector(".buy-button");
    buyButton.addEventListener("click", this.addToCart.bind(this));
  }
  
  addToCart() {
    if (cart[this.id]) {
      cart[this.id]++;
    } else {
      cart[this.id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    //console.log(cart);
    showCountCart();
    modal.modalTitleElem.innerHTML = this.name;
    modal.modalBodyElem.innerHTML = `
      <div class="row">
        <div class="col-3">
          <img src="${this.image}" style="object-fit: contain; width: 100%;">
        </div>
        <div class="col-6">
          <h5>Добавлен в корзину</h5>
          <p>${this.price} руб.</p>
        </div>
      </div>  
    `;
    modal.show();
  }

  showMoreInfo() {
    modal.modalTitleElem.innerHTML = this.name;
    modal.modalBodyElem.innerHTML = `
      <div class="row">
        <div class="col-3">
          <img src="${this.image}" style="object-fit: contain; width: 100%;">
        </div>
        <div class="col-8">
          <h4>${this.price} руб.</h4>
          <p>${this.myDescription}</p>
        </div>
      </div>  
    `;
    modal.show();
  }
}

class Modal {
  constructor() {
    this.elem = document.createElement("div");
    this.elem.className = "modal";
    this.elem.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content" style="max-height: 85vh; overflow: auto;">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    `;
    document.body.prepend(this.elem);
    
    this.modalTitleElem = this.elem.querySelector(".modal-title");
    this.modalBodyElem = this.elem.querySelector(".modal-body");
    this.modalFooterElem = this.elem.querySelector(".modal-footer");
    this.closeButton = this.elem.querySelector(".close");
    this.closeButton.addEventListener("click", this.hide.bind(this));
  }
  show() {
    this.elem.style.display = "block"
  }
  hide() {
    this.elem.style.display = "";
  }
}

let modal = new Modal();

function getAllProducts() {
  fetch("getAllProducts.php")
    .then((responce) => {return responce.json()})
    .then((result) => {
      for(let product of result) {
        let card = new ProductCard(product.id, product.name, product.price, product.category, product.my_description, product.image);
        console.log(card);
      }
    })
}

getAllProducts();