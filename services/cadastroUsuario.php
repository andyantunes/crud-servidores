<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include_once('./databaseConnection.php');

$action = $_POST['action'];

switch ($action) {
    case 'insertUser':
        
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

        break;

    case 'getUsers':

        $arrayUsers = [];

        $sql = 'select * from lofi.users';
        $rs = mysqli_query($mysqli, $sql);
        while ($users = mysqli_fetch_assoc($rs)) {
            array_push($arrayUsers, array(
                'id' => $users['UserId'],
                'name' => $users['UserName'],
                'email' => $users['UserEmail'],
                'phone' => $users['UserPhone'],
            ));
        }
        
        if($rs) {
            $return = true;
        } else {
            $return = "Error updating record: " . mysqli_error($mysqli);
        }
        
        mysqli_close($mysqli);

        header('Content-Type: application/json');
        echo json_encode(array(
            'return' => $return,
            'arrayUsers' => $arrayUsers
        ));

        break;
    
        case "deleteUsuario":

            $id = $_POST['id'];
    
            $sql = 'delete from lofi.users where id = '.$id;
            $rs = mysqli_query($mysqli, $sql);
            
            if($rs) {
                $return = true;
            } else {
                $return = "Error updating record: " . mysqli_error($mysqli);
            }
    
            mysqli_close($mysqli);
    
            header('Content-Type: application/json');
            echo json_encode(array(
                'return' => $return,
            ));
    
    default:
        # code...
        break;
}
