<?php include ('connection/db-file.php');
include ('admin_user_login.php');
include ('SimpleImage.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome to Kaalaai</title>
<?php include ('website-link.php'); ?>
</head>

<body>
<?php
$category=true;
include ('menu-page.php'); ?>


<div class="content">
<div class="container-fluid">
<div class="admin-mainouter">
<div class="admin_all_head">
Edit Category
</div>

<?php 
$id=$_GET['id'];
$src_image='';
$select_query=mysqli_query($con,"select * from main_cat where id='$id'");
if(mysqli_num_rows($select_query)>0){
while($r1=mysqli_fetch_array($select_query)){
?>

<form action="" method="post" name="editcat" enctype="multipart/form-data">
<div class="admin_box">


<div class="clearfix"></div><br />



<span class="left-side">Category&nbsp;</span>
<input type="text" name="category" value="<?php echo $r1['name']; ?>"  class="text-box" required />
<div class="clearfix"></div>


<div class="btn-outer">
<input type="submit" name="submit"  id="submit" value="Update" style="margin:0px 0px 0px 130px;" />
<a href="category.php"><input type="button" value="Cancel" class="back_btn" style="margin-top:0px;"/></a>
</div>
</div>

</form>

<?php
}
}
?>


</div>
</div>
</div>

<?php
if(isset($_POST['submit'])){

$title=mysqli_real_escape_string($con,$_POST['category']);
$alias=createSlug($_POST['category']);

				  $sql="update main_cat set name='$title',alias='$alias' where id='$id'";
				  $sql_query=mysqli_query($con,$sql);
				 
				  $result=mysqli_query($con,$sql);
				
				   if($result)
				   {
					 echo '<script>alert("Successfully Updated")</script>';
					 echo '<script>window.location.assign("category.php")</script>';
				   }
				   else
				   {
					 echo '<script>alert("Try again")</script>';
				     echo '<script>window.location.assign("edit-category.php?id='.$_GET['id'].'")</script>';
				   }
}//if
?>
</body>
</html>