<?php
    //echo phpinfo();
    //ini_set('max_execution_time', 0);
    $password = "";
    $username = "root";

    $mysqli = new mysqli("localhost", $username, $password, "lofi");
    $mysqli->query("SET NAMES 'utf8'");
    
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }   
        
?>

