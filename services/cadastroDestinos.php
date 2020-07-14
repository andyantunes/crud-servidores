<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');

include_once('./databaseConnection.php');

$action = $_POST['action'];

switch ($action) {
    case 'insertDestinos':
        
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

        break;

    case "getDestinos":

        $arrayDestination = [];

        $sql = 'select * from lofi.destinations';
        $rs = mysqli_query($mysqli, $sql);
        while ($destinations = mysqli_fetch_assoc($rs)) {
            array_push($arrayDestination, array(
                'id' => $destinations['DestinationId'],
                'name' => $destinations['DestinationName'],
                'type' => $destinations['DestinationType'],
                'city' => $destinations['City'],
                'note' => $destinations['ExperienceNote'],
                'experience' => $destinations['MonthExperience'],
                'review' => $destinations['Review'],
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
            'arrayDestination' => $arrayDestination
        ));

    break;

    case "deleteDestinos":

        $id = $_POST['id'];

        $sql = 'delete from lofi.destinations where id = '.$id;
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

    break;
    
    default:
        # code...
        break;
}
