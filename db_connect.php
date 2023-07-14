<?php
try {
    $conn = mysqli_connect("localhost", "root", "root", "jquery_task");
} catch (mysqli_sql_exception $e) {
    echo "An error occurred: " . $e->getMessage();
}
?>
