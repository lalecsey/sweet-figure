<?php
  $title = 'Оформление заказа';
  $links = '';
  $scripts = '<script src="js/buy.js"></script>';
  require_once("./components/header.php");
?>

<div class="contaier">
  <div class="row justify-content-center">
    <div class="col-6">
      <form class="form-buy my-5" action="buy_obr.php" method="POST" enctype="multipart/form-data">
        <h1 class="text-center">Оформление заказа</h1>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <input type="text" class="form-control" placeholder="Имя" name="name" required>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <input type="text" class="form-control" placeholder="Фамилия" name="lastname" required>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <input type="text" class="form-control" placeholder="Телефон" name="phone" required>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <textarea rows="5" class="form-control" placeholder="Адрес" name="address" required></textarea>
        </div>
        <div class="input-group mb-3 d-none">
          <div class="input-group-prepend">
            <span class="input-group-text"></span>
          </div>
          <textarea rows="3" class="form-control order-text" placeholder="Заказ" name="order"></textarea>
        </div>
        <p class="error-text text-danger"></p>
        <input type="submit" class="btn btn-block btn-primary" value="Оформить">
      </form>
      <div class="alert alert-success" role="alert" style="display: none">
        Заказ успешно офрмлен!
      </div>
    </div>
  </div>
</div>


<!-- Optional JavaScript -->
<?php
  require_once("./components/footer.php");
?>