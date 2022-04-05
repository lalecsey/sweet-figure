<?php

header('Content-type: text/html; charset=utf-8');
// $_POST  $_GET
$name = htmlspecialchars(trim($_POST['name']) );  // trim() - обрезаем пробелы слева  справа
// htmlspecialchars - исключает возможность XSR -атаки
$price = htmlspecialchars(trim($_POST['price']) );
$category = htmlspecialchars(trim($_POST['category']) );
$description = htmlspecialchars(trim($_POST['description']) );

if (empty($name) || empty($price) || empty($category) || empty($description)) {
  exit("Не все поля заполнены");
}

$uploaddir = './img/';
$uploadfile = $uploaddir . basename($_FILES['image']['name']);
if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile)) {
    exit("Файл не удалось загрузить");
}

// AEepS9S&
$dbhost = "localhost";
$dbuser = "c964765d_1010"; //root
$dbpass = "AEepS9S&"; //root
$dbname = "c964765d_1010";
$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
$mysqli->set_charset("utf-8");

if ($mysqli->connect_error) {
  die("Не удалось подключиться к БД ".$mysqli->connect_error);
}

// Название таблицы и её столбцов в обратных кавычках
// Значение в одинарных

$result = $mysqli->query("INSERT INTO `shop`(`name`, `price`, `category`, `my_description`, `image`) VALUES ('$name', '$price', '$category', '$description', '$uploadfile')");

//Результат INSERT - булевное значение

if (!$result) {
  exit("Не удалось добавить товар");
} else {
  exit("ok");
}
?>