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

<script>
function check_image()
{

	var f1=0,f2=1;
	var img_file1=document.f1.image1.value;
	var img_file2=document.f1.image2.value;
	
	if(img_file1!='')
	{
		
		  var file_array = img_file1.split("."); 
		  var file_array1 = file_array[1].toLowerCase();
		  if ((file_array1 == 'jpg')||(file_array1 == 'jpeg')||(file_array1 == 'png')||(file_array1 == 'gif')||(file_array1 == 'JPG')||(file_array1 == 'JPEG')||(file_array1 == 'PNG')||(file_array1 == 'GIF'))
		  {
		  		f1=1;
		  }
		  else
		  {
		  		f1=0;
			   alert("Image extension is invalid... ");
			   document.f1.image1.focus();
			   return false;
		  }      
	}
	
	if(img_file2!='')
	{
		
		  var file_array = img_file2.split("."); 
		  var file_array1 = file_array[1].toLowerCase();
		  if ((file_array1 == 'jpg')||(file_array1 == 'jpeg')||(file_array1 == 'png')||(file_array1 == 'gif')||(file_array1 == 'JPG')||(file_array1 == 'JPEG')||(file_array1 == 'PNG')||(file_array1 == 'GIF'))
		  {
		  		f2=1;
		  }
		  else
		  {
		  		f2=0;
			   alert("Image extension is invalid... ");
			   document.f2.image2.focus();
			   return false;
		  }      
	}
	
	if((f1==1)&&(f2==1))
	{
		document.getElementById("f1").submit();
	}
	else return false;

}
</script>




<div class="content">
<div class="container-fluid">

<div class="admin_mainouter">
<div class="admin_all_head">Add  Subcategory 
	
</div>

<form action="" method="post"  autocomplete="off" onSubmit="return check_image()" name="f1" id="f1" enctype="multipart/form-data">



<div class="admin_box" style="width:95%;">



<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;">Category</font><br />

<select class="select_box" name="mainid" required>
<option value="">-- Select Category --</option>
<?php
$select=mysqli_query($con,"select * from main_cat where action=1 order by id DESC");
if(mysqli_num_rows($select)){
while($r2=mysqli_fetch_array($select)){
?>
<option  value="<?php echo $r2['id'];?>"> <?php echo $r2['name']; ?> </option>
<?php
}
}
?>
</select>
</div>




<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;">Title</font><br />
<input type="text" name="sub_title" class="text-box2" />
</div>

<div class="clearfix"></div> <br />


<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500; padding-left:10px; padding-right:20px;">Small Image </font>
<font color="#FF0000" size="2" style="font-weight:normal;">Size (1000px * 497px) (jpg,png,jpeg)</font><br />
<input type="file" name="image1" class="text-box2" required="" style="border:0px;" />
</div>

<!--<div class="select-box-outer" style="width:48%;">
<font color="#000000" size="3" style="font-weight:500;  padding-right:20px;">Banner Image</font>
<font color="#FF0000" size="2" style="font-weight:normal;">Size (1920px * 600px) (jpg,png,jpeg)</font><br />
<input type="file" name="image2" class="text-box2" required="" style="border:0px;" />
</div>-->



<div class="btn-outer">
<input type="submit" name="submit"  id="submit" value="Submit" />
<a href="subcategory.php"><input type="button" value="Cancel" id="submit" style="margin:0px 0px 0px 15px;" /></a>
</div>
</div>

</form>

</div>


<?php

if(isset($_POST['submit']))
{
 
$upload_file="../upload/images/";
$resize_file="../upload/images/subcategory/small_img/";
$upload_files="/Kashmiri Cuisine/kashmiri-new/upload/images/";
$resize_files="/Kashmiri Cuisine/kashmiri-new/upload/images/subcategory/small_img/";


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
				 $subcat_img=$base_name;
				 @unlink($upload_file.$base_name);
			}	 
				 
			
		 if($_FILES['image2']['name']!='')
		 {
			$image_name1=$_FILES['image2']['name'];
			$image_tmpname1=$_FILES['image2']['tmp_name'];
			$image_size1=$_FILES['image2']['size'];
 
 	 			 $oext1=getExtention($image_name1);
				 $ext1=strtolower($oext1);
				
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
			}	 
				 
	
 
 
  $id=$_POST['mainid'];
  $subtitle=mysqli_real_escape_string($con,$_POST['sub_title']);
  $alias=createSlug($_POST['sub_title']);
 // $sub_id=$_POST['sub_id'];
        
		/*$data = "select * from sub_cat where name='$subtitle' ";
  	    $cmd = mysqli_query($con, $data);
		
		if (mysqli_num_rows($cmd) > 0)
		{
  	  	  echo '<script>alert("Sorry title is already exists");window.location=\'add-subcategory.php\'</script>'; 	
  	 	}
		
		else
		{
		*/
	
	 	 $sql="insert into sub_cat(main_id,name,alias,small_img,ban_img,action,date) values('".$id."','".$subtitle."','".$alias."','".$subcat_img."','".$banner_img."',
		1,'".$todaydate."')";
		
		$result=mysqli_query($con,$sql);
		
		if($result)
		{
			echo '<script>alert("Added Successfully...")</script>';
			echo '<script>window.location.assign("subcategory.php")</script>';
		}
		else
		{
			echo '<script>alert("Try again... ")</script>';
			echo '<script>window.location.assign("add-subcategory.php")</script>';
		}
		//}
	
				

}
?>
</div>
</div>
</body>
</html>