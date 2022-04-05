<?php
header('Content-type: text/html; charset=utf-8');

// Получить JSON как строку
$json_str = file_get_contents('php://input');

// Получить объект
$json_obj = json_decode($json_str);

$cart_id = array_keys($json_obj);


require_once("components/db.php"); // Подставляет код из db.php

$result = $mysqli->query("SELECT * FROM `shop` WHERE id IN ".$cart_id);
for($shop = []; $row = $result->fetch_assoc(); $shop[] = $row);


$responce = json_encode($shop); // Кодируем массив в формате JSON
exit($responce);












?>