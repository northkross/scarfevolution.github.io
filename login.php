<?php
session_start();
$servername = "10.0.0.75";
$username = "webuser";
$password = "password123";
$dbname = "user";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userss = $_POST["username"];
    $pass = $_POST["password"];

    $sql = "SELECT * FROM users WHERE username='$userss'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row["password"])) {
            $_SESSION["username"] = $userss;
            echo "Login successful! <a href='dashboard.php'>Go to Dashboard</a>";
        } else {
            echo "Invalid credentials!";
        }
    } else {
        echo "Invalid credentials!";
    }
}
$conn->close();
?>

<form method="POST">
    Username: <input type="text" name="username" required><br>
    Password: <input type="password" name="password" required><br>
    <button type="submit">Login</button>
</form>
