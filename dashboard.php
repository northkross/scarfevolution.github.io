<?php
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: login.php");
    exit();
}
?>

<h2>Welcome, <?php echo $_SESSION["username"]; ?>!</h2>
<form action="delete_account.php" method="post" onsubmit="return confirm('Are you sure you want to delete your account? This cannot be undone!');">
    <input type="submit" name="delete" value="Delete My Account">
</form>
<a href="logout.php">Logout</a>

