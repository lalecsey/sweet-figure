<?php
header('Content-type: text/html; charset=utf-8');
$id = htmlspecialchars( trim($_POST['id']) );
$name = htmlspecialchars( trim($_POST['name']) );
$price = htmlspecialchars( trim($_POST['price']) );
$category = htmlspecialchars( trim($_POST['category']) );
$description = htmlspecialchars( trim($_POST['description']) );

if (empty($name) || empty($price) || empty($category) || empty($description)) {
  exit("Не все поля заполнены");
}

require_once("../components/db.php");

$result = $mysqli->query("SELECT * FROM `shop` WHERE `id`='$id'")->fetch_assoc();
if($result['image'] != "") {
  if(!unlink($result['image'])) {
    exit("Не удалось удалить файл");
  }
}
$uploaddir = '../img/';
$uploadfile = $uploaddir . basename($_FILES['image']['name']);
if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile)) {
    exit("Файл не удалось загрузить");
}

$result = $mysqli->query("UPDATE `shop` SET `name`='$name',`price`='$price',`category`='$category',`description`='$description',`image`='$uploadfile' WHERE `id`='$id'");
if (!$result) {
  exit("Не удалось обновить");
} else {
  exit("ok");
}