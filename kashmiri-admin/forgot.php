<?php include ('connection/db-file.php'); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

 <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php include ('website-link.php'); ?>	
</head>

<body style="background:#FFFFFF;">

<div class="container">
<!--adminlogin_outer start-->
<div class="adminlogin_outer">
<div class="img_outer"><img src="images/logo.png" /></div>
<div class="adminlogin_inner">

<div class="admin_head1">
<!--Forgot Password-->
</div>
<form action="" method="post" name="l1" id="l1" autocomplete="off" >






<div class="input_login" style="background:url(images/email.png) no-repeat center left 5px;">
<input name="email" id="email"  placeholder="Enter your email." class="user_box" tabindex="1" required="" autocomplete="off" type="email">
</div>




 <div class="input_login input_login1">
		<input type="password"   name="password"    placeholder="Enter your new password."   id="myInput"   required /><br /><br />
        
        <div class="outer">
        <input type="checkbox" class="check" onclick="myFunction()"><p class="show">Show Password</p>
        </div>
	
     </div>



<button class="button" name="submit" type="submit"><span>Reset Password </span></button>

<a class="pass" href="index.php">Admin Login ?</a>
</form>

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



</div>
</div>


<?php
if(isset($_POST['submit'])){

$email=mysqli_real_escape_string($con,$_POST['email']);
$password=encryptIt($_POST['password']);

//echo $email; echo "<br>";
//echo  $password;

$foremail='';
$forgot_query=mysqli_query($con,"select * from admin_login where  email='$email'");
if(mysqli_num_rows($forgot_query)==1){
	while($r2=mysqli_fetch_array($forgot_query))
	{
	$foremail=$r2['email'];
	}
	$update_query="update admin_login set password='$password' where email='$email'";
	$result=mysqli_query($con,$update_query);
	if($result){
	echo '<script>alert("Your Password has been changed")</script>';
	echo '<script>window.location.assign("index.php")</script>';
	}
	else{
	echo '<script>alert("Try again")</script>';
	}
	}
	else{
	echo '<script>alert("Invalid Email ID")</script>';
}


}
?>




</body>
</html>
