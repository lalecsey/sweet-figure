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
    this.elem.className = "col-4";
    this.elem.innerHTML = `
      <div class="card">
        <div class="card-img-top card-image-div" style="background-image: url(${this.image})"></div>
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <small>${this.price} руб.</small>
          <p class="card-text">${this.category}</p>
          <button class="btn btn-primary more-button m-1">Подробное</button>
          <button class="btn btn-warning change-button m-1">Изменить</button>
          <button class="btn btn-danger delete-button m-1">Удалить</button>
        </div>
      </div>
    `;
    let catalog = document.querySelector(".catalog");
    catalog.append(this.elem);
    
    let moreButton  = this.elem.querySelector(".more-button");
    moreButton.addEventListener("click", this.showMoreInfo.bind(this));  // Привязывает переменную указанную в скобках как this фнутри функции
    let changeButton  = this.elem.querySelector(".change-button");
    changeButton.addEventListener("click", this.showChangeInfo.bind(this))
    let deleteButton  = this.elem.querySelector(".delete-button");
    deleteButton.addEventListener("click", this.deleteProduct.bind(this))
  }
  
  deleteProduct() {
    if (confirm(`Вы действительно хотите удалить ${this.name}?`)) {
      fetch(`deleteProduct_obr.php?id=${this.id}`)
        .then((response) => {return response.text()})
        .then((result) => {
          if(result == "ok") {
            //window.location.reload();
            this.elem.remove();
          } else {
            alert(result);
          }
        });
    }
  }
  
  showChangeInfo() {
    modal.modalTitleElem.innerHTML = "Изменить товар";
    modal.modalBodyElem.innerHTML = `
      <form action="/sweet-figure/modific/changeProduct_obr.php" method="POST" enctype="multipart/form-data" class="change-form">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Наименование товара" name="name" value="${this.name}">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Цена" name="price" value="${this.price}">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <textarea class="form-control" placeholder="Краткое описание (до 100 символов)" name="short-description">${this.category}</textarea>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <textarea rows="10" class="form-control" placeholder="Полное описание" name="full-description">${this.myDescription}</textarea>
        </div>
        <p>Изображение товара</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="file" class="form-control" name="image">
        </div>
        <p class="error-text text-danger"></p>
        <input type="submit" class="btn btn-block btn-warning" value="Изменить">
      </form>
    `
    modal.show();
    let form = modal.modalBodyElem.querySelector(".change-form");
    let card = this;
    form.onsubmit = function(event) {
      event.preventDefault();
      card.sendChangeForm(form);
    }
  }
  
  sendChangeForm(form) {
    let formData = new FormData(form);
    formData.append("id", this.id);
    fetch(form.getAttribute("action"), {
      method: "POST",
      body: formData,
    })
      .then((response) => {return response.text()})
      .then((result) => {
        if(result == "ok") {
          window.location.reload();
        } else {
          alert(result);
        }
      });
  }

  showMoreInfo() {
    modal.modalTitleElem.innerHTML = this.name;
    modal.modalBodyElem.innerHTML = `
      <div class="row">
        <div class="col-4">
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