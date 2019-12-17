<?php
$server='localhost';
$name='root';
$password='';
$con= mysqli_connect($server,$name,$password);
if(!$con){
	echo"can not connect to server";
}

$sql='CREATE DATABASE IF NOT EXISTS events';

mysqli_query($con,$sql);
$dbb=mysqli_select_db($con,"events");

$sqll="CREATE TABLE  eventsdata(
event_type varchar(300),
event_target varchar(300),
event_time varchar(300)
)";


$q=mysqli_query($con,$sqll);
if(!$q){
	echo"table does not created";
}



?>