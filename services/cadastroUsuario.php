<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include_once('./databaseConnection.php');

$name = $_POST['name'];
$password = $_POST['password'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$options = ['cost' => 14];
$hash = password_hash($password, PASSWORD_DEFAULT, $options);

$sql = 'insert into users (UserName, UserPassword, UserEmail, UserPhone) 
        values("'.$name.'", "'.$hash.'", "'.$email.'", "'.$phone.'")';
$rs = mysqli_query($mysqli, $sql);

if($rs) {
    $return = true;
} else {
    $return =  "Error updating record: " . mysqli_error($mysqli);
}

mysqli_close($mysqli);

header('Content-Type: application/json');
echo json_encode(array(
    'return' => $return
));