<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="/sweet-figure/css/style.css">
    <?php echo $links ?>
    <title><?php echo $title ?></title>
  </head>
  <body>
    <div class="my-header">
      <div class="container-fluid">
        <div class="row mb-3">
          <div class="col-3"><img src="/sweet-figure/img/logo_bg.png" class="my-logo" alt=""></div>
          <div class="col-6 text-center">
            <div class="my-logo-text">Сахарные фигуурки на заказ</div>
          </div>
          <div class="col-3">
            <div class="auth text-center font-weidht-bold mt-1">Вход</div>
            <nav class="navbar float-right mt-2" style="background-color: #55443d;">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
              </form>
            </nav>
            <div class="cart text-center">
              <a class="nav-link" href="/sweet-figure/cart.php">
                <img class="cart-logo" src="/sweet-figure/img/cart.png" alt="">
                <span class="cart-text mx-2">Корзина</span>
                <span class=cart-count></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-nav-container">
        <div class="row font-weidht-bold">
          <div class="col-3 text-center my-nav d-flex align-items-center justify-content-center"><span><a href="/sweet-figure/index.php" class="nav-link">Главная</a></span></div>
          <div class="col-3 text-center my-nav d-flex align-items-center justify-content-center"><a href="/sweet-figure/catalog.php" class="nav-link">Каталог</a></div>
          <div class="col-3 text-center my-nav d-flex align-items-center justify-content-center"><a href="delivery.php" class="nav-link">Доставка</a></div>
          <div class="col-3 text-center my-nav d-flex align-items-center justify-content-center"><a href="about.php" class="nav-link">Контакты</a></div>
        </div>
      </div>
    </div>