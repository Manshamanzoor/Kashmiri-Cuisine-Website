<?php
session_start();
$hostname="localhost";
$username="root";
$password="";
$dbname="kashmiri_db";
$con=mysqli_connect($hostname,$username,$password);
mysqli_select_db($con,$dbname);
$websiteurl="";
$websiteurl1="http://localhost/kashmiri-new/";
?>

