<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include_once('./databaseConnection.php');

$name = $_POST['name'];
$local = $_POST['local'];
$city = $_POST['city'];
$country = $_POST['country'];
$review = $_POST['review'];
$tips = $_POST['tips'];

$sql = 'insert into destinations
        (DestinationName, DestinationLocal, City, Country, Review, Tips)
        values("'.$name.'", "'.$local.'", "'.$city.'", "'.$country.'", "'.$review.'", "'.$tips.'")';
$rs = mysqli_query($mysqli, $sql);

if($rs) {
    $return = true;
} else {
    $return = "Error updating record: " . mysqli_error($mysqli);
}

mysqli_close($mysqli);

header('Content-Type: application/json');
echo json_encode(array(
    'return' => $return
));