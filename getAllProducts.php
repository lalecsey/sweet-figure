<?php

require_once("components/db.php"); // Подставляет код из db.php

$result = $mysqli->query("SELECT * FROM `shop` WHERE 1");
for($shop = []; $row = $result->fetch_assoc(); $shop[] = $row);


$responce = json_encode($shop); // Кодируем массив в формате JSON
exit($responce);


















?>