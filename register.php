<?php
include_once "db_connect.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dob = $_POST['dob'];
    $password = $_POST['password'];

    $query = "Insert into register_user (full_name, email_id, mobile_no, dob, password) values ('$fullname','$email','$mobile','$dob','$password')";

    $result = mysqli_query($conn, $query);

    if ($result) {
        $response = "Registration successful!";
    } else {
        $response = "Registration failed. Please try again.";
    }

}

echo $response;

?>

