<?php
$dbhost = "localhost";
$dbuser = "c964765d_1010"; //root
$dbpass = "AEepS9S&"; //root
$dbname = "c964765d_1010";
$mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
$mysqli->set_charset("utf-8");

if ($mysqli->connect_error) {
  die("Не удалось подключиться к БД ".$mysqli->connect_error);
}
