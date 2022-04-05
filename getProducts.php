<?php
header('Content-type: text/html; charset=utf-8');

$cart_id = $_GET['cart_id'];


require_once("components/db.php"); // Подставляет код из db.php

$result = $mysqli->query("SELECT * FROM `shop` WHERE `id`='$cart_id'");
for($shop = []; $row = $result->fetch_assoc(); $shop[] = $row);


$responce = json_encode($shop); // Кодируем массив в формате JSON
exit($responce);












?>