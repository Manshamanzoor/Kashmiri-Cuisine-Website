<?php include ('connection/db-file.php');
include ('admin_user_login.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


<?php include ('website-link.php'); ?>
</head>

<body>
<?php 
$adminhome=true;
include ('menu-page.php'); ?>	

 <div class="content">
        <div class="container-fluid">
          <div class="row">
            
            <div class="admin_head">Admin Details</div>
            
      

     <!--Category--> 
        <div class="col-md-4">
           <a href="category.php"><div class="card-outer">
           	<div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                 <div class="card-icon">
                    <i class="ti-menu-alt" style="padding-right:9px;"></i>
                  </div>
                  <p class="card-category"></p>
                  <font color="#000000" style="font-size:17px; font-weight:500;"><?php
					$count=mysqli_query($con,"select * from main_cat where action=1");
					if(mysqli_num_rows($count)>0){
					echo mysqli_num_rows($count);
					}
					else{
					echo "0"; } ?>
				</font>
                  <div class="card-title">Categories </div>
                </div></div></div></a></div>
       <!--Category-->
       
       
       
       
       <!--Subcategory--> 
        <div class="col-md-4">
           <a href="subcategory.php"><div class="card-outer">
           	<div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                    <i class="ti-layers-alt" style="padding-right:9px;"></i>
                  </div>
                  <p class="card-category"></p>
                  <font color="#000000" style="font-size:17px; font-weight:500;"><?php
					$count=mysqli_query($con,"select * from sub_cat");
					if(mysqli_num_rows($count)>0){
					echo mysqli_num_rows($count);
					}
					else{
					echo "0"; } ?>
                   </font>
                  <div class="card-title"> Subcategories </div>
                </div></div></div></a></div>
       <!--Subcategory-->
       
       
        <!--Product--> 
        <div class="col-md-4">
           <a href="product.php"><div class="card-outer">
           	<div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                 <div class="card-icon">
                    <i class="fa fa-cutlery" style="padding-right:9px;"></i>
                  </div>
                  <p class="card-category"></p>
                  <font color="#000000" style="font-size:17px; font-weight:500;"><?php
					$count=mysqli_query($con,"select * from product where action=1");
					if(mysqli_num_rows($count)>0){
					echo mysqli_num_rows($count);
					}
					else{
					echo "0"; } ?>
                   </font>
                  <div class="card-title"> Dishes </div>
                </div></div></div></a></div>
       <!--Product-->
       
       
       
       
       
       
       
        <!--Subscribe Users--> 
        <div class="col-md-4">
           <a href="comment.php"><div class="card-outer">
           	<div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                 <div class="card-icon">
                    <i class="ti-email" style="padding-right:9px;"></i>
                  </div>
                  <p class="card-category"></p>
                  <font color="#000000" style="font-size:17px; font-weight:500;"><?php 
					$suc_order=mysqli_query($con,"select * from table1 order by id asc");
					if(mysqli_num_rows($suc_order)>0){
					echo mysqli_num_rows($suc_order);
					}
					else{
					echo "0";
					}	
					?>
                 </font>
                  <div class="card-title"> Comments</div>
                </div></div></div></a></div>      <!--Subscribe Users-->
       
       
       
       
       
       
       
       
       
           
          
          </div> <!--row-->
            </div> <!--container-fluid-->
            </div> <!--content-->
           



</body>
</html>
