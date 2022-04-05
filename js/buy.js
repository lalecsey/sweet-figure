  let orderText = document.querySelector(".order-text");
  orderText.innerText = JSON.stringify(cart);
  
  let form = document.querySelector(".form-buy");
  form.onsubmit = function(event) {   
    event.preventDefault();   // Прерываем стандартый сабмит
    send();                   // Используем свою функцию для отправки   
  }
  function send() { // Отправляем данные, используя технологию AJAX
    let formData = new FormData(form);
    fetch("buy_obr.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {return response.text()})
      .then((result) => {
        if (result == "ok") {
          showSuccessMessage();
          localStorage.removeItem('cart');
        } else {
          changeErrorMessage(result);
        }
      })
  }
  
  function changeErrorMessage(message) {
    let elem = document.querySelector(".error-text");
    elem.innerHTML = message;
  }

  function showSuccessMessage() {
    let alertSuccess = document.querySelector(".alert-success");
    form.style.display= "none";
    alertSuccess.style.display = "block";
  }