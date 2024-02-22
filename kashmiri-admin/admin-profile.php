<?php include ('connection/db-file.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include ('website-link.php'); ?>
</head>

<body>
<?php
$profile=true;
include ('menu-page.php'); ?>

<div class="content">
<div class="container-fluid">
<div class="row">

<div class="adminlogin_outer1">
<div class="heading">Admin Profile</div> <!--heading-->


<div class="adminlogin_inner2">
<div class="admin_head1">
<!--<img src="images/admin.png" style="margin-bottom:10px; margin-top:-70px;">--></div>

<form action="" method="post" name="admin">

<?php
$select_query=mysqli_query($con,"select * from admin_login");
if(mysqli_num_rows($select_query)>0){
while ($row=mysqli_fetch_array($select_query)){

?>
 	
<font color="#000" style="font-size:16px;"><b>Username</b></font>

<input type="text"  placeholder="Enter your username." class="user-box3" value="<?php echo $row['username']; ?>"  autocomplete="off" name="user"  required />
<div class="clearfix"></div>
	
    
<font color="#000" style="font-size:16px;"><b>Password</b></font>	  

<input type="text"   name="pass"    placeholder="Enter your password." value="<?php echo decryptIt($row['password']); ?>" class="user-box3"  required />
<div class="clearfix"></div>
	 

<font color="#000" style="font-size:16px;"><b>Email</b></font>	

<input type="email"   name="email"    placeholder="Enter your Email." value="<?php echo $row['email']; ?>" class="user-box4"  required />
<div class="clearfix"></div>


<?php /*?><font color="#000000" size="+1"><b>Forgot Email</b></font>	  
<input type="email"   name="forgotemail"    placeholder="Enter your Email." value="<?php echo $row['forgot_email']; ?>" class="user-box2"  required /><?php */?>



<div class="btn-outer">
<input type="submit" value="Update" name="update" id="submit1" />
<a href="admin-home.php"><input type="button" value="Cancel" class="back_btn" style="margin-top:30px;"/></a>
</div>

<?php
}
}
?>

</form>
</div>



<?php
if(isset($_POST['update'])){


$username=mysqli_real_escape_string($con,$_POST['user']);
$pass=encryptIt($_POST['pass']);
$email=mysqli_real_escape_string($con,$_POST['email']);
/*$forgotemail=mysqli_real_escape_string($con,$_POST['forgotemail']);*/


$update="update admin_login set username='$username',password='$pass',email='$email' where id=1";
$result=mysqli_query($con,$update);
if($result)
{
	
	echo '<script>alert("Updated Successfully")</script>';
	echo '<script>window.location.assign("admin-profile.php")</script>';
}
else
{
	echo '<script>alert("Try again")</script>';
	echo '<script>window.location.assign("admin-profile.php")</script>';
}

}
?>

</div> <!--adminlogin_outer-->

</div> <!--row-->
</div> <!--container-fluid-->
</div> <!--content-->

</body>
</html>