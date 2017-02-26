<?php

$file = fopen("scores.json","r+");
$scores = file_get_contents("scores.json");
//$scores = json_decode($str, true);

echo "You're score has been submitted to the JSON file!";
$newScore = $_POST["value"];


for($i = 0;$i<10;$i++){
    if ($_POST["value"]>$scores[$i]){
        //echo $_POST["score"];
        //echo $scores[$i];
        $temp = $score[$i];
        $scores[$i] = $_POST["score"];
        $_POST["score"] = $temp;
    }
}

fwrite($file,$scores);

fclose($file);
?>