<?php include ('connection/db-file.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include ('website-link.php'); ?>
<!--<link rel="stylesheet" href="ckeditor/samples/toolbarconfigurator/lib/codemirror/neo.css">
<script src="ckeditor/ckeditor.js"></script>
<script src="editor/editor.js"></script>
<script src="editor/samples/js/editorsample.js"></script> 
<script src="ckeditor/samples/js/sample.js"></script> -->
    
	<!--<link rel="stylesheet" href="ckeditor/samples/css/samples.css">-->

<script src="tinymce/js/tinymce/tinymce.min.js"></script>
<script src="https://maxcdn.bootstrapcdncom/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

</head>
<?php
$bulkemail=true;
include ('menu-page.php'); ?>
<body>
<style>
.cke_chrome {
	height:260px;
}
.tox-tinymce{
	height:350px !important;
}
</style>

<div class="content">
<div class="container-fluid">

<?php
$admin_email='';
	$admin_query=mysqli_query($con,"select * from admin_login where id=1");
	while($aq1=mysqli_fetch_array($admin_query)) {   $admin_email=$aq1['email']; }
?>

<div class="admin_mainouter">
<div class="admin_all_head">Bulk Email</div>

<form action="" method="post" name="bulkemail" autocomplete="off">








<div class="admin_box3" style="padding-top:40px; width:100%;">

<div class="admin_box1" style="width:100%;">
<span class="left-side" style="width:10%;">User Type</span>
<input type="text" name="title"  class="type-select1" value="Subscribe User" readonly="readonly" style="background:#eee;" />

</div>


<div class="admin_box1" style="width:100%;">
<span class="left-side" style="width:10%;">Subject&nbsp;</span>
<input type="text" name="title"  class="type-select1" required />
</div>
<div class="clearfix"></div><br />



<div class="desc_title">Description</div>
<div class="textarea_outer2">
<!--<textarea name="descr" id="editor1" required="" ></textarea>-->


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
<textarea name="description" id="description"></textarea>


</div>



<div class="clearfix"></div>



<div class="btn-outer">
<input type="submit" name="submit"  id="submit" value="Submit" style="margin:10px 0px 0px 20px;" />
<a href="admin-home.php"><input type="button" value="Cancel" class="back_btn" /></a>
</div>
</div>

</form>


<?php

if(isset($_POST['submit'])) { 

		$subemail='';
		$title=mysqli_real_escape_string($con,$_POST['title']);
		$description=$_POST['description'];
		
		
		
	$image_path=str_replace('<img src="','<img src="'.$websiteurl1, $description);	

	$headers1  = "MIME-Version: 1.0 \n";
	$headers1 .= "Content-type: text/html; charset=utf-8 \n";
	$headers1 .= "From:'".$admin_email."' \n";
	$subject=$title;
	$to=$admin_email;

	   $message_for = "<br />".$image_path."<br /><br />";
			

		
		$select_subscribe=mysqli_query($con,"select * from subscribe_user");
		while($s1=mysqli_fetch_array($select_subscribe)) 
		{
		
		 $sub_email=$s1['email'];  
		 $subemail .=$sub_email.',';
	
		} //while	
	
		  $sub_insert="insert into bulk_email (title,description,email,date) values('".$title."','".$image_path."','".$subemail."','".$todaydate."')";
	     $sub_result=mysqli_query($con,$sub_insert);
		 if($sub_result) {
		
			
			echo '<script>window.lcation.assign("bulk-email.php")</script>';
		
	
				if(mail($subemail, $subject, $message_for, $headers1))
				{
					echo '<script>alert("Your email has been successfully sent...");</script>';
				
				}
			}//if
} //isset
?>


</div>
</div>
</div>


</body>
</html>