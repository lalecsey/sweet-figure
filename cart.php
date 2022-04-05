<?php
 $title = "Корзина";
 $links = '<link rel="stylesheet" href="css/cart.css">';
 $scripts = '<script src="js/cart.js"></script>';
 require_once("components/header.php");
?>
  
  <div class="container">
    <div class="row">
      <div class="col-12 cart-height mt-4">
        <div class="row body-cart">
          <h3 class="text-center empty-cart">Ваша козина пуста</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center buy font-weight-bold">
        <span class="mx-2">Итоговая стоимость: </span>
        <span class="full-price-text"></span>
        <button type="button" class="buy-button btn btn-success btn-lg my-3 mx-2">Оформить</button>
      </div>
    </div>
  </div>



<?php
  require_once("components/footer.php")
?>