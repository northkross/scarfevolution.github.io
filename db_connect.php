<?php
$host = "localhost";
$user = "your_mysql_user";
$password = "your_mysql_password";
$database = "your_database_name";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
