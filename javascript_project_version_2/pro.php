<?php

if(isset($_POST['eventObjects'])){

$eventObjects = json_decode($_POST['eventObjects'], true);

	 $conn = new mysqli("localhost", "root", "", "events");
  if($conn->connect_error){
 	die($conn->connect_error);
  }

for($i=0;$i<count($eventObjects);$i++) {
	$type=$eventObjects[$i]['type'];
  $target=$eventObjects[$i]['target'];
  $time=$eventObjects[$i]['time'];


 
  $sql = "Insert Into  eventsdata values('$type', '$target', '$time')";
  $conn->query($sql);
  if($conn->affected_rows > 0){
    echo "Inserted Successfully ";
  }
  else{
    echo "Sorry: Problem With Insertion"; 
  } }
}





if(isset($_GET['eventObjects'])){

  $sql="select * from eventsdata ";


 $conn = new mysqli("localhost", "root", "", "events");
  if($conn->connect_error){
  die($conn->connect_error);
  }
  if ($result = $conn->query($sql)){
    $rows = array();
    if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
      array_push($rows, $row);
     }
    //Convert to JSON Before Sending to Client
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}
?>