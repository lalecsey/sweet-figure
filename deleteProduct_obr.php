<?php
require_once("./components/db.php");
$id = $_GET['id'];

$result = $mysqli->query("SELECT * FROM `shop` WHERE `id`='$id'")->fetch_assoc();
if($result['image'] != "") {
  if(!unlink($result['image'])) {
    exit("Ну удалось удалить файл");
  }
}

$result = $mysqli->query("DELETE FROM `shop` WHERE `id`='$id'");
if($result) {
  exit("ok");
} else {
  exit("Не удалось удалить товар");
}