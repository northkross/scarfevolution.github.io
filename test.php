<?php
$conn = new mysqli("10.0.0.75", "webuser", "password123", "user");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully!";
$conn->close();
?>
