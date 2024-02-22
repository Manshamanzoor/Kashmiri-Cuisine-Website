<?php include ('connection/db-file.php');
include ('admin_user_login.php');
include ('SimpleImage.php'); 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

 
<?php include ('website-link.php'); ?>
</head>

<body>

<style>
.select-box-outer{
	width:47%;
}
</style>

<?php
$subcategory=true;
include ('menu-page.php'); ?>





<div class="content">
<div class="container-fluid">

<div class="admin_mainouter">
<div class="admin_all_head">Edit Subcategory</div>

<form action="" method="post"  autocomplete="off"  enctype="multipart/form-data">

<?php 
$id=$_GET['id'];
$small_img='';
$banner_img='';
$select_query=mysqli_query($con,"select * from sub_cat where id='$id'");
if(mysqli_num_rows($select_query)>0){
while($r1=mysqli_fetch_array($select_query)){
$small_img=$r1['small_img'];
$banner_img=$r1['ban_img'];
?>




<div class="admin_box" style="width:95%;">



<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;">Category</font><br />

<select class="select_box" name="mainid" required>
<option value="Select Category">-- Select Category --</option>
<?php
$select=mysqli_query($con,"select * from main_cat where action=1 order by id DESC");
if(mysqli_num_rows($select)){
while($r2=mysqli_fetch_array($select)){
?>
<option  value="<?php echo $r2['id'];?>" <?php if($r1['main_id']==$r2['id']) { echo 'selected="selected"'; } ?>  > <?php echo $r2['name']; ?> </option>
<?php
}
}
?>
</select>
</div>



<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;">Subcategory</font><br />
<input type="text" name="sub_title" class="text-box2"  value="<?php echo $r1['name']; ?>" />
</div>

<div class="clearfix"></div>

<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500; padding-left:10px; padding-right:20px;">Banner Image </font>
<font color="#FF0000" size="2" style="font-weight:normal;">Size (1000px * 497px) (jpg,png,jpeg)</font><br />
<input type="file" name="image1" class="text-box2" style="border:0px;" />
<?php
if($r1['small_img']!=='') { ?>
<img src="../upload/images/subcategory/small_img/<?php echo $r1['small_img']; ?>" style="width:50%; float:left; margin-top:10px;"/> <?php } ?>
</div>

<!--<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;  padding-right:20px;">Banner Image</font>
<font color="#FF0000" size="2" style="font-weight:normal;">Size (1920px * 600px) (jpg,png,jpeg)</font><br />
<input type="file" name="image2" class="text-box2" style="border:0px;" />
<img src="../upload/images/subcategory/banner/<?php echo $r1['ban_img']; ?>"  style="width:75%; float:left; margin-top:20px;" />
</div>-->





<div class="btn-outer">
<input type="submit" name="submit"  id="submit" value="Submit" />
<a href="subcategory.php"><input type="button" value="Cancel" id="submit" style="margin:0px 0px 0px 15px;" /></a>
</div>
</div>
<?php } } ?>

</form>

</div>


<?php

if(isset($_POST['submit']))
{

$main_id=mysqli_real_escape_string($con,$_POST['mainid']);
$subcat=mysqli_real_escape_string($con,$_POST['sub_title']);
$alias=createSlug($_POST['sub_title']);
 
$upload_file="../upload/images/";
$resize_file="../upload/images/subcategory/small_img/";
$upload_files="/kashmiri-new/upload/images/";
$resize_files="/kashmiri-new/upload/images/subcategory/small_img/";


$upload_file1="../upload/images/";
$resize_file1="../upload/images/subcategory/banner/";
$upload_files1="/kashmiri-new/upload/images/";
$resize_files1="/kashmiri-new/upload/images/subcategory/banner/";

	
	
	
		 if($_FILES['image1']['name']!='')
		 {
			$image_name=$_FILES['image1']['name'];
			$image_tmpname=$_FILES['image1']['tmp_name'];
			$image_size=$_FILES['image1']['size'];
	 
 	 			 $oext=getExtention($image_name);
				 $ext=strtolower($oext);
				 if($ext=='jpg'||$ext=='png'||$ext=='gif'||$ext=='jpeg')
				 {
				 $base_name=time().rand(0,999).".".$oext;
				 
				 move_uploaded_file($image_tmpname,"$upload_file".$base_name);
				 list($width,$height)=getimagesize("$upload_file".$base_name);
				 $file_location = $_SERVER["DOCUMENT_ROOT"].$upload_files; # Image folder Path
				 $image = new SimpleImage();
				 $image->load($file_location. $base_name);
				  if($width >= $height)
				 {
				  $image->maxareafill(1000,497);
				 }
				
				 if($height >= $width)
				 {
				   $image->maxareafill(1000,497);
				 }
				 $image->save($_SERVER["DOCUMENT_ROOT"].$resize_files. $base_name);
				 $small_img=$base_name;
				 @unlink($upload_file.$base_name);
			}
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-subcategory.php?id='.$_GET['id'].'")</script>';
				  }
			}	 
				 
				 $banner_img='';
		 if($_FILES['image2']['name']!='')
		 {
			$image_name1=$_FILES['image2']['name'];
			$image_tmpname1=$_FILES['image2']['tmp_name'];
			$image_size1=$_FILES['image2']['size'];
 
 	 			 $oext1=getExtention($image_name1);
				 $ext1=strtolower($oext1);
				 if($ext1=='jpg'||$ext1=='png'||$ext1=='gif'||$ext1=='jpeg' )
				 {
				 $base_name1=time().rand(0,999).".".$oext1;
				 
								
				 move_uploaded_file($image_tmpname1,"$upload_file1".$base_name1);
				 list($width,$height)=getimagesize("$upload_file".$base_name1);
				 $file_location1=$_SERVER["DOCUMENT_ROOT"].$upload_files1; # Image folder Path
				 $image = new SimpleImage();
				 $image->load($file_location1. $base_name1);
				  if($width >= $height)
				 {
				  $image->maxareafill(1920,600);
				 }
				
				 if($height >= $width)
				 {
				   $image->maxareafill(1920,600);
				 }
				 $image->save($_SERVER["DOCUMENT_ROOT"].$resize_files1. $base_name1);
				 $banner_img=$base_name1;
				 @unlink($upload_file1.$base_name1);			 
				 
				 
			//if (image extension)
				 }
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-subcategory.php?id='.$_GET['id'].'")</script>';
				  }
			}	
 			
 
 	$sql="update sub_cat set main_id='".$main_id."',name='".$subcat."',alias='".$alias."',small_img='".$small_img."',ban_img='".$banner_img."',date='".$todaydate."' 
	where id='".$id."'";
	if(mysqli_query($con,$sql)){
		
		echo '<script>alert("Updated Successfully")</script>';
		echo '<script>window.location.assign("subcategory.php")</script>';
	}
	else {
		echo '<script>alert("Please Try Again...")</script>';
		echo '<script>window.location.assign("edit-subcategory.php?id='.$_GET['id'].'")</script>';
	}
}
?>
</div>
</div>
</body>
</html>