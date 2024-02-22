<?php include ('connection/db-file.php');
if(isset($_SESSION['admin_user']))
{
header ("location:admin-home.php");
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kashmiri Cuisine Admin Page </title>

<link href="style.css" rel="stylesheet" type="text/css">

<?php include ('functions/view_det.php'); ?>
</head>
<body style="background:#FFFFFF;">





<div class="container">
<!--adminlogin_outer start-->
<div class="adminlogin_outer">
<div class="img_outer"><img src="images/logo.png" /></div>
<div class="adminlogin_inner">
<!--<div class="admin_head1">Admin Login</div>-->
<div class="admin_head1">
Admin Login
</div>
<div class="clearfix"></div>
<form action="" method="post" name="l1" id="l1" autocomplete="off" >


 	
	 <div class="input_login">
		<input type="text"  placeholder="Enter your username" class="user_box"  autocomplete="off" name="user"  required />
	</div>




		  <div class="input_login input_login1">
		<input type="password"   name="pass"    placeholder="Enter your password"   id="myInput"   required /><br /><br />
        
        <div class="outer">
        <input type="checkbox" class="check" onclick="myFunction()"><p class="show">Show Password</p>
        </div>
	
     </div>

	<button class="button" type="submit" name="login"><span>Login </span></button>
  
<!--<a class="pass" href="forgot.php">Forgot Password ?</a>-->

</form>


<?php
function add_ampersand( $string ) {
    $string = preg_replace( '/\band\b/', '&amp;', $string );

    return $string;
}
?>

<script>
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
</script>




</div> <!--admin-inner-->
</div>  <!--admin-outer-->
</div>  <!--container-->

<?php
//kashmiri&^$
if(isset($_POST['login']))
{

    $uname=mysqli_real_escape_string($con,$_POST['user']);
	$pass=encryptIt($_POST['pass']);
	
	/*echo $uname;
	echo $pass;
	$pass=encryptIt($_POST['pass']);*/


	$sql=mysqli_query($con, "select * from admin_login where username='$uname' AND password='$pass' ");
	if(mysqli_num_rows($sql)>0)
	{
	$_SESSION['admin_user']=$uname;
     echo '<script>window.location=\'admin-home.php\'</script>';
    }
	else
	{
	echo '<script>alert("Invalid username and password. Please try again!")</script>';
	echo '<script>window.location.assign("index.php")</script>';
	}
}
?>
 
</body>
</html>