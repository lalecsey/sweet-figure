<?php

header('Content-type: text/html; charset=utf-8');
// $_POST  $_GET
$name = htmlspecialchars(trim($_POST['name']) );  // trim() - обрезаем пробелы слева  справа
// htmlspecialchars - исключает возможность XSR -атаки
$lastname = htmlspecialchars(trim($_POST['lastname']) );
$phone = htmlspecialchars(trim($_POST['phone']) );
$address = htmlspecialchars(trim($_POST['address']) );
$order = htmlspecialchars(trim($_POST['order']) );

if (empty($name) || empty($lastname) || empty($phone) || empty($address)) {
  exit("Не все поля заполнены");
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

$result = $mysqli->query("INSERT INTO `order`(`name`, `lastname`, `phone`, `address`, `order_list`) VALUES ('$name', '$lastname', '$phone', '$address', '$order')");

//Результат INSERT - булевное значение

if (!$result) {
  exit("Не удалось добавить товар");
} else {
  exit("ok");
}
?>