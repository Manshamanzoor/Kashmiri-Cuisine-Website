<?php include ('connection/db-file.php');
include ("SimpleImage.php"); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<?php include ('website-link.php'); ?>

<script src="tinymce/js/tinymce/tinymce.min.js"></script>
<script src="https://maxcdn.bootstrapcdncom/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>

<body>
<?php
$product=true; include ('menu-page.php'); ?>


<style>
.tox-tinymce{
	height:350px !important;
}
.admin_box3{
	width:100%;
}
</style>

<!-- select subcategory-->

<script language="javascript" type="text/javascript">
function getXMLHTTP() 
{ //fuction to return the xml http object
                                var xmlhttp=false;           
                                try
                                {
                                                xmlhttp=new XMLHttpRequest();
                                }
                                catch(e)               
                                {                              
                                                try
                                                {                                              
                                                                xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
                                                }
                                                catch(e)
                                                {
                                                                try
                                                                {
                                                                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
                                                                }
                                                                catch(e1)
                                                                {
                                                                                xmlhttp=false;
                                                                }
                                                }
                                }
                                                
                                return xmlhttp;
}


<!-- subcategory level 1-->
                
function getsubcat(strURL) 
{
                                var req4 = getXMLHTTP();                            
                                if (req4) 
                                {
                                                req4.onreadystatechange = function() 
                                                {
                                                                                if (req4.readyState == 4) 
                                                                                {
                                                                                                if(req4.status == 200) 
                                                                                                {                                                                                              
                                                                                                document.getElementById('castediv').innerHTML=req4.responseText;                                                                                 
                                                                                                } 
                                                                                                else 
                                                                                                {
                                                                                                alert("There was a problem while using XMLHTTP:\n" + req4.statusText);
                                                                                                }
                                                                                }                                                              
                                                }                                              
                                                req4.open("GET", strURL, true);
                                                req4.send(null);
                                }                                                              
}

<!-- select category level 1-->
</script>


<!--select subcategory level 2-->


<div class="content">
<div class="container-fluid">
<div class="admin_mainouter">
<div class="admin_all_head">
Edit Dish Name <font color="#FF0000" style="float:right; font-size:15px;"> * (Required Field)</font>
</div>

<?php
$id=$_GET['id'];
$pro_query=mysqli_query($con,"select * from product where id='".$id."'");
while($pq1=mysqli_fetch_array($pro_query)) { 
$dimage1=$pq1['img1'];
$dimage2=$pq1['img2'];
$dimage3=$pq1['img3'];
$dimage4=$pq1['img4'];
$video=$pq1['video'];

?>


<form action="" method="post" name="f1"  autocomplete="off"  enctype="multipart/form-data">


<div class="admin_box3">
<div class="half_page_outer">

<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Category &nbsp;</font><font color="#FF0000"> * </font>


<select name="mainid" class="select_box" onChange="getsubcat('select_sub.php?mainid='+this.value)" required=" ">
<option value="">-- Select Category --</option>
<?php

$catid='';
$query=mysqli_query($con,"select * from main_cat where action=1  order by id DESC");
while($rows=mysqli_fetch_array($query))
{
?>
<option  value="<?php echo $rows['id']; ?>" <?php if($rows['id']==$pq1['main_id']) { echo "selected"; } ?>><?php echo $rows['name']; ?></option>
<?php
}
?>
</select>

</div>



<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Subcategory  &nbsp;</font><font color="#FF0000"> * </font>

<div id="castediv">
<select name="sub_id" class="select_box" >
<option value="">-- Select Subcategory --</option>
<?php
$sel_sub=mysqli_query($con,"select * from sub_cat where action=1 order by id desc");
while($ss1=mysqli_fetch_array($sel_sub)) { ?>
<option  value="<?php echo $ss1['id']; ?>" <?php if($ss1['id']==$pq1['sub_id']) { echo "selected"; } ?>><?php echo $ss1['name']; ?></option>
<?php } ?>
</select>
</div>
</div>

<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Dish Name &nbsp;</font><font color="#FF0000">*</font>
<input type="text" name="proname"  class="text-box2"  required value="<?php echo $pq1['name']; ?>" />
</div>


<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Subtitle &nbsp;</font><font color="#FF0000"></font>
<input type="text" name="subtitle"  class="text-box2"    value="<?php echo $pq1['subtit']; ?>" />
</div>

<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Preparation&nbsp;</font><font color="#FF0000">*</font>
<input type="text" name="prep"  class="text-box2"  required value="<?php echo $pq1['prep']; ?>" />
</div>



<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Cook&nbsp;</font><font color="#FF0000">*</font>
<input type="text" name="cook"  class="text-box2"  required  value="<?php echo $pq1['cook']; ?>" />
</div>
<div class="clearfix"></div>

<div class="admin_box1">
<font color="#000000" size="3" style="font-weight:500">Yield&nbsp;</font><font color="#FF0000">*</font>
<input type="text" name="yield"  class="text-box2"  required value="<?php echo $pq1['yield']; ?>" />
</div>

<div class="clearfix"></div>
</div>


<div class="half_page_outer">


<div class="image-tit">Dish Images &nbsp;&nbsp;<font color="#FF0000" size="2">Image Size (1920px * 735px) (jpg,png,jpeg)</font></div>

<div class="admin_box1">
<input  name="product_img1"  type="file" class="choose_btn">
<font color="#FF0000" size="2" style="float:right; text-align:left; padding-right:50px;">Image Size (1920px * 735px) (jpg,png,jpeg)</font>
<img src="../upload/images/product/<?php echo $pq1['img1']; ?>" class="img-thumbnail"  style="width:200px; height:200px;" />
</div>

<div class="admin_box1">
<input  name="product_img2"    type="file" class="choose_btn"> <br />
<?php
if($pq1['img2']!=='') { ?>
<img src="../upload/images/product/<?php echo $pq1['img2']; ?>" class="img-thumbnail"  style="width:200px; height:200px;" />
<?php } ?>
</div>

<div class="admin_box1">
<input  name="product_img3"   type="file" class="choose_btn" > <br />
<?php
if($pq1['img3']!=='') { ?>
<img src="../upload/images/product/<?php echo $pq1['img3']; ?>" class="img-thumbnail"  style="width:200px; height:200px;" />
<?php } ?>
</div>

<div class="admin_box1">
<input  name="product_img4"   type="file" class="choose_btn" > <br />
<?php
if($pq1['img4']!=='') { ?>
<img src="../upload/images/product/<?php echo $pq1['img4']; ?>" class="img-thumbnail"  style="width:200px; height:200px;" />
<?php } ?>
</div>

<div class="clearfix"></div>
<div class="image-tit" style="margin-top:0px;">Ingredients</div>
<div id="dynamic_field" style="margin-top:10px;">
<?php	
$k=1;
foreach(explode('~',$pq1['ingredient']) as $key) { 
if($pq1['ingredient']!=='')
{
if($k==1)
{
?>


<div class="admin_box4">
<font color="#000000" size="3" style="font-weight:500;">Key &nbsp;</font> <br />
<input type="text" name="key[]"  class="spec-text" required="" value="<?php echo htmlspecialchars($key); ?>" /> 
 </div>


<div class="button-outer">
<button type="button" name="add" id="add" class="add-new1">Add More</button>
</div>
<?php
}
else
{ 
?>
<div id="dynamic_field">
<div id="row<?php echo $k; ?>">
<input type="text" name="key[]" value="<?php echo htmlspecialchars($key); ?>"  class="spec-text-remove" />
<button type="button" name="remove" id="<?php echo $k; ?>" class="delete btn_remove">Remove</button>
</div>
</div>

<?php
}
}
$k=$k-1;
}
?>
</div>





<div class="image-tit">Directions</div>
<div class="textarea_outer2">


<script>
tinymce.init({
    selector: '#description',
    plugins: 'image code',
    toolbar: 'undo redo | image code',
	
    plugins: [
   'advlist autolink lists link image charmap print preview anchor textcolor ',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste imagetools  code wordcount  '
  ],
  toolbar: 'insertfile  image  link |  insert | undo redo |  formatselect | bold italic backcolor  fontsizeselect  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code',
  fontsize_formats: "8px 9px 10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px 26px 27px 28px 29px 30px 31px 32px 33px 34px 35px 36px 37px 38px 39px 40px 41px 42px 43px 44px 45px 46px 47px 48px 49px 50px 55px 60px",
    // without images_upload_url set, Upload tab won't show up
    images_upload_url: 'upload.php',
    
    // override default upload handler to simulate successful upload
    images_upload_handler: function (blobInfo, success, failure) {
        var xhr, formData;
      
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', 'upload.php');
      
        xhr.onload = function() {
            var json;
        
            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
        
            json = JSON.parse(xhr.responseText);
        
            if (!json || typeof json.location != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
        
            success(json.location);
        };
      
        formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
      
        xhr.send(formData);
    },
});
</script>
<textarea name="direction" id="description"><?php echo $pq1['direction']; ?></textarea>
<div class="half_page_outer">


 

<div class="clearfix"></div>



</div>
<div class="btn-outer">
<input type="submit" name="submit"  id="submit" value="Submit" />
<a href="product.php"><input type="button" value="Cancel" id="submit" style="margin:0px 0px 0px 15px;" /></a>
</div>
</div> <!--admin_box3-->

</form>

<?php } ?>


 <script>  
 $(document).ready(function(){  
      var i=1;  
      $('#add').click(function(){  
           i++;  
$('#dynamic_field').
append('<div id="dynamic_field"><div id="row'+i+'"><input type="text" name="key[]"  class="spec-text-remove" /><button type="button" name="remove" id="'+i+'" class="delete btn_remove" >Remove</button></div></div>');  
      });  
      $(document).on('click', '.btn_remove', function(){  
           var button_id = $(this).attr("id");   
           $('#row'+button_id+'').remove();  
      });  
      $('#submit').click(function(){            
           $.ajax({  
                url:"name.php",  
                method:"POST",  
                data:$('#f1').serialize(),  
                success:function(data)  
                {  
                     alert(data);  
                     $('#f1')[0].reset();  
                }  
           });  
      });  
 });  
 </script>





<?php
if(isset($_POST['submit'])){

$pimage1='';
$pimage2='';
$pimage3='';
$pvideo='';

$upload_file="../upload/images/";
$resize_file="../upload/images/product/";
$upload_file1="/kashmiri-new/upload/images/";
$resize_file1="/kashmiri-new/upload/images/product/";

	
	
	$mainid=mysqli_real_escape_string($con,$_POST['mainid']);
	$subid=mysqli_real_escape_string($con,$_POST['sub_id']);
	$productname=mysqli_real_escape_string($con,$_POST['proname']);
	$alias=createSlug($_POST['proname']);
	$subtitle=mysqli_real_escape_string($con,$_POST['subtitle']);
	$prep=mysqli_real_escape_string($con,$_POST['prep']);
	$cook=mysqli_real_escape_string($con,$_POST['cook']);
	$yield=mysqli_real_escape_string($con,$_POST['yield']);
	$direction=mysqli_real_escape_string($con,$_POST['direction']);

 //product Image1
	 if($_FILES['product_img1']['name']!='')
	 {
	 
					$top_img=$_FILES['product_img1']['name'];
					$tname=$_FILES["product_img1"]["tmp_name"];
					$size=$_FILES["product_img1"]["size"];
					$oext=getExtention($top_img);
					$ext=strtolower($oext);
					if($ext=='jpg'||$ext=='png'||$ext=='gif'||$ext=='jpeg' )
				    {
					$base_name=time().rand(0,999).".".$oext;
	
					move_uploaded_file($tname,"$upload_file".$base_name);
					list($width,$height)=getimagesize("$upload_file".$base_name);
   					$file_location = $_SERVER["DOCUMENT_ROOT"].$upload_file1; # Image folder Path
   					$image = new SimpleImage();
   					$image->load($file_location. $base_name);
  					 if($width >= $height)
   					{
    					 $image->maxareafill(1000,500);
   					}

   					if($height >= $width)
   					{
	 				  $image->maxareafill(1000,500);
   					}
   					$image->save($_SERVER["DOCUMENT_ROOT"].$resize_file1. $base_name);
					$dimage1=$base_name;
					@unlink($upload_file.$base_name);
					
				}
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
				   
				  }	
					
					
		}

	 //product Image2
	 if($_FILES['product_img2']['name']!='')
	 {
	 
					$top_img=$_FILES['product_img2']['name'];
					$tname=$_FILES["product_img2"]["tmp_name"];
					$size=$_FILES["product_img2"]["size"];
					$oext=getExtention($top_img);
					$ext=strtolower($oext);
					if($ext=='jpg'||$ext=='png'||$ext=='gif'||$ext=='jpeg' )
				    {
					$base_name=time().rand(0,999).".".$oext;
	
					move_uploaded_file($tname,"$upload_file".$base_name);
					list($width,$height)=getimagesize("$upload_file".$base_name);
   					$file_location = $_SERVER["DOCUMENT_ROOT"].$upload_file1; # Image folder Path
   					$image = new SimpleImage();
   					$image->load($file_location. $base_name);
  					 if($width >= $height)
   					{
    					 $image->maxareafill(1920,735);
   					}

   					if($height >= $width)
   					{
	 				  $image->maxareafill(1920,735);
   					}
   					$image->save($_SERVER["DOCUMENT_ROOT"].$resize_file1. $base_name);
					$dimage2=$base_name;
					@unlink($upload_file.$base_name);
				}
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
				   
				  }	
					
		}
		
	 //product Image3
	 if($_FILES['product_img3']['name']!='')
	 {
	 
					$top_img=$_FILES['product_img3']['name'];
					$tname=$_FILES["product_img3"]["tmp_name"];
					$size=$_FILES["product_img3"]["size"];
					$oext=getExtention($top_img);
					$ext=strtolower($oext);
					if($ext=='jpg'||$ext=='png'||$ext=='gif'||$ext=='jpeg' )
				    {
					$base_name=time().rand(0,999).".".$oext;
	
					move_uploaded_file($tname,"$upload_file".$base_name);
					list($width,$height)=getimagesize("$upload_file".$base_name);
   					$file_location = $_SERVER["DOCUMENT_ROOT"].$upload_file1; # Image folder Path
   					$image = new SimpleImage();
   					$image->load($file_location. $base_name);
  					 if($width >= $height)
   					{
    					 $image->maxareafill(1920,735);
   					}

   					if($height >= $width)
   					{
	 				  $image->maxareafill(1920,735);
   					}
   					$image->save($_SERVER["DOCUMENT_ROOT"].$resize_file1. $base_name);
					$dimage3=$base_name;
					@unlink($upload_file.$base_name);
			}
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
				   
				  }	
		}
		
		
		
		//product Image3
	 if($_FILES['product_img4']['name']!='')
	 {
	 
					$top_img=$_FILES['product_img4']['name'];
					$tname=$_FILES["product_img4"]["tmp_name"];
					$size=$_FILES["product_img4"]["size"];
					$oext=getExtention($top_img);
					$ext=strtolower($oext);
					if($ext=='jpg'||$ext=='png'||$ext=='gif'||$ext=='jpeg' )
				    {
					$base_name=time().rand(0,999).".".$oext;
	
					move_uploaded_file($tname,"$upload_file".$base_name);
					list($width,$height)=getimagesize("$upload_file".$base_name);
   					$file_location = $_SERVER["DOCUMENT_ROOT"].$upload_file1; # Image folder Path
   					$image = new SimpleImage();
   					$image->load($file_location. $base_name);
  					 if($width >= $height)
   					{
    					 $image->maxareafill(1920,735);
   					}

   					if($height >= $width)
   					{
	 				  $image->maxareafill(1920,735);
   					}
   					$image->save($_SERVER["DOCUMENT_ROOT"].$resize_file1. $base_name);
					$dimage4=$base_name;
					@unlink($upload_file.$base_name);
			}
				 
				  else{
				   echo '<script>alert("Please Upload Valid Image File..")</script>';
				   echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
				   
				  }	
		
		
		}

	if($_FILES['poduct_video']['name']!='')
   {
   
          $top_img=$_FILES['product_video']['name'];
          $tname=$_FILES["product_video"]["tmp_name"];
          $size=$_FILES["product_video"]["size"];
          $oext=getExtention($top_img);
          $ext=strtolower($oext);
          if($ext=='mp4'||$ext=='oog'||$ext=='m4a' )
            {
          $base_name=time().rand(0,999).".".$oext;
  
          move_uploaded_file($tname,"$upload_file".$base_name);
          list($width,$height)=getimagesize("$upload_file".$base_name);
            $file_location = $_SERVER["DOCUMENT_ROOT"].$upload_file1; # Image folder Path
            $image = new SimpleImage();
            $image->load($file_location. $base_name);
             if($width >= $height)
            {
               $image->maxareafill(1920,735);
            }

            if($height >= $width)
            {
            $image->maxareafill(1920,735);
            }
            $image->save($_SERVER["DOCUMENT_ROOT"].$resize_file1. $base_name);
          $dimage3=$base_name;
          @unlink($upload_file.$base_name);
      }
         
          else{
           echo '<script>alert("Please Upload Valid Image File..")</script>';
           echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
           
          } 
    }
    
		

	
$key_spec='';			
			if(isset($_POST['key']))
		{
			for ($i=0; $i<sizeof($_POST['key']); $i++)
			{
				
				if(isset($_POST['key'][$i]))
				{
					$key_spec .=$_POST['key'][$i];
				}
				
				if(sizeof($_POST['key'])!=($i-1))
				{
				$key_spec .="~";
				}
			}
		}	



	      $sql="update product set main_id='$mainid',sub_id='$subid',name='$productname',subtit='$subtitle',alias='$alias',img1='$dimage1',
		img2='$dimage2',img3='$dimage3',img4='$dimage4',direction='$direction',prep='$prep',cook='$cook',yield='$yield',ingredient='$key_spec',date='$todaydate' 
		where id='$id'";
				  
				
			
		if(mysqli_query($con,$sql))
			{
				echo '<script>alert("Updated Successfully...")</script>';
	        	echo '<script>window.location.assign("product.php")</script>';
			}
			else{
				echo '<script>alert("Please Try Again...")</script>';
	        	echo '<script>window.location.assign("edit-product.php?id='.$_GET['id'].'")</script>';
			}
	}
?>
	
	


</div>
</div>
</div>




</body>
</html>



