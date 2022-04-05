<?php
  $title = 'Добавить товар';
  $links = '';
  require_once("../components/header.php");
?>

<div class="contaier">
  <div class="row justify-content-center">
    <div class="col-6">
      <form class="add-form my-5" action="addProduct_obr.php" method="POST" enctype="multipart/form-data">
        <h1 class="text-center">Добавить товар</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Наименование товарая" name="name">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Цена" name="price">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Категория" name="category">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <textarea rows="10" class="form-control" placeholder="Описание" name="description"></textarea>
        </div>
        <p>Изображение товара</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="file" class="form-control" name="image">
        </div>
        <p class="error-text text-danger"></p>
        <input type="submit" class="btn btn-block btn-primary" value="Добавить">
      </form>
      <div class="alert alert-success" role="alert" style="display: none">
        Товар успешно добавлен!
      </div>
    </div>
  </div>
</div>

<!-- Optional JavaScript -->
<script>
  let form = document.querySelector(".add-form");
  form.onsubmit = function(event) {   
    event.preventDefault();   // Прерываем стандартый сабмит
    send();                   // Используем свою функцию для отправки   
  }
  function send() { // Отправляем данные, используя технологию AJAX
    let formData = new FormData(form);
    fetch("addProduct_obr.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {return response.text()})
      .then((result) => {
        if (result == "ok") {
          showSuccessMessage();
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
</script>

<?php
  require_once("../components/footer.php");
?>