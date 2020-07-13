<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include_once('./databaseConnection.php');

$title = $_POST['title'];
$note = $_POST['note'];
$city = $_POST['city'];
$type = $_POST['type'];
$period = $_POST['period'];
$description = $_POST['description'];

$sql = 'insert into destinations
        (DestinationName, DestinationType, City, ExperienceNote, MonthExperience, Review)
        values("'.$title.'", "'.$note.'", "'.$city.'", "'.$type.'", "'.$period.'", "'.$description.'")';
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