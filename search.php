<?php
include ('kashmiri-admin/connection/db-file.php'); 
include ('kashmiri-admin/functions/view_det.php');   
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title -->
    <title>Kashmiri Cuisine By Mansha & Nisha</title>

    <!-- Favicon -->
    <link rel="icon" href="img/core-img/favicon.ico">

    <!-- Core Stylesheet -->
   
    <?php include ('website-link.php'); ?>
</head>

<body>
    <!-- Preloader -->
   

  <?php  include ('header.php'); ?>

	
    <!-- ##### Breadcumb Area Start ##### -->
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/wzwn.jpg);">
   <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                      <h2></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcumb Area End ##### -->
    

       

        <!-- Receipe Content Area -->
        <div class="receipe-content-area">
            <div class="container">
				
                <div class="row">
                    <div class="col-12 col-lg-12">
                   <div class="section-heading" style="margin-top:30px;">
                        <h3>Search</h3>
                    </div>
                    <div class="clearfix"></div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                        
                            <ul>
                            
                            	<?php
								if(isset($_GET['search'])) {
								$keyword=$_GET['search'];
								$sql_query = mysqli_query($con, "select * from  product where action=1 and  name like '%$keyword%'  order by id DESC");
								if(mysqli_num_rows($sql_query)==0)
								{
								?>
                                <div class="no_dish1"> No Dishes Found...</div> 
                                <?php	
								}
								
								while($ps1=mysqli_fetch_array($sql_query)) { 

								?>
                            
                                 <div class="clr">
                                 <li>
                                    <a href="main-dish.php?alias=<?php echo $ps1['alias']; ?>&subid=<?php echo $ps1['sub_id']; ?>&id=<?php echo $ps1['id']; ?>">
                                     <!--1.  Mutton Roganjosh--> <?php echo $ps1['name']; ?></a>
                                    <h5><!--Recipe courtesy of waza brothers--><?php echo $ps1['subtit']; ?></h5>
                                </li>
                               </div>
                               
                               <?php   } } ?>
                             
                            
                        </ul>
                    </div>
                </div>
              
            
            
          
               </div>
           </div>
       </div>
                                   
                                
               

    <!-- ##### Follow Us Instagram Area Start ##### -->
    <div class="follow-us-instagram">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>Follow Us Instragram</h5>
                </div>
            </div>
        </div>
        <!-- Instagram Feeds -->
        <div class="insta-feeds d-flex flex-wrap">
            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins3.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins2.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins1.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins4.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/is5.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins6.jpg" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>

            <!-- Single Insta Feeds -->
            <div class="single-insta-feeds">
                <img src="img/bg-img/ins7.png" alt="">
                <!-- Icon -->
                <div class="insta-icon">
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Follow Us Instagram Area End ##### -->

<?php include ('footer.php'); ?>
    <!-- ##### Footer Area Start ##### -->
   
            

</body>
</html>
<!--CREATE TABLE `subscribers` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
 `verify_code` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
 `is_verified` tinyint(1) NOT NULL DEFAULT '0',
 `created` datetime NOT NULL,
 `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 `status` tinyint(1) NOT NULL DEFAULT '1',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci; -->
