<?php include ('kashmiri-admin/connection/db-file.php'); 
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
 <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 

    <!-- Title -->
    <title>Kashmiri Cuisine</title>

    <!-- Favicon -->
    <link rel="icon" href="img/core-img/favicon.ico">

  
  <?php include ('website-link.php'); ?>
     
    
   

</head>

<body>
    <!-- Preloader -->
    <div id="preloader">
        <i class="circle-preloader"></i>
        <img src="img/core-img/salad.png" alt="">
    </div>

 <?php $home=true; include ('header.php'); ?>   

    <!-- ##### Hero Area Start ##### -->
    <section class="hero-area">
        <div class="hero-slides owl-carousel">
            <!-- Single Hero Slide -->
            <div class="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg-1.jpg);">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Todays Special</h2>
                                <p data-animation="fadeInUp" data-delay="700ms"><img src="img/bg-img/spec.gif"></p>
                                <a href="main-dish.php?alias=kashmiri-kehwa&subid=0&id=2" class="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Single Hero Slide -->
            <div class="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg-6.jpg);">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Todays Special</h2>
                                <p data-animation="fadeInUp" data-delay="700ms"><img src="img/bg-img/spec.gif" height="0"></p>
                                <a href="main-dish.php?alias=kashmiri-kehwa&subid=0&id=2" class="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Single Hero Slide -->
            <div class="single-hero-slide bg-img" style="background-image: url(img/bg-img/bg-7.jpg);">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div class="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Todays Special</h2>
                                <p data-animation="fadeInUp" data-delay="700ms"><img src="img/bg-img/spec.gif"></p>
                                <a href="main-dish.php?alias=kashmiri-kehwa&subid=0&id=2" class="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        
       </div>
    </section>
    <!-- ##### Hero Area End ##### -->


    <!-- ##### Top Catagory Area Start ##### -->
    <?php
	$main_cat=mysqli_query($con,"select * from main_cat where action=1 order by id asc");
	while($mc1=mysqli_fetch_array($main_cat)) { 
	?>
    
    <section class="top-catagory-area section-padding-80-0">
        <div class="container" id="recipes">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3><!--Kashmiri Recipes--><?php echo $mc1['name']; ?></h3>
                    </div>
                </div> 
                <!-- Top Catagory Area -->
                
                <?php
				$sub_cat=mysqli_query($con,"select * from sub_cat where action=1 and main_id='".$mc1['id']."' order by id desc");
				while($sc1=mysqli_fetch_array($sub_cat)) {
				if($sc1['name']!=='') {
                ?>
                <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <!--<img src="img/bg-img/bg2.jpg" alt="">-->
                        <img src="upload/images/subcategory/small_img/<?php echo $sc1['small_img']; ?>" alt="">
                        <!-- Content -->
                        <div class="top-cta-content">
                            <h3><!--Kashmiri Wazwaan--><?php echo $sc1['name']; ?></h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="kashmiri-subcate.php?alias=<?php echo $sc1['alias']; ?>&id=<?php echo $sc1['id']; ?>" class="btn delicious-btn">See Full Recipe</a>
                        </div>
                    </div>
                </div>
              
			  <?php } } ?>
              
              
              	<?php
				
				$prod_que=mysqli_query($con,"select * from product where action=1 and main_id='".$mc1['id']."' and sub_id=0 order by id desc");
				while($pd=mysqli_fetch_array($prod_que)) { ?>
              			<div class="col-12 col-lg-6" id="Special">
                    		<div class="single-best-receipe-area mb-30">
                        		<img src="upload/images/product/<?php echo $pd['img1']; ?>" alt="">
                                <div class="receipe-content">
                                    <a href="main-dish.php?alias=<?php echo $pd['alias']; ?>&subid=<?php echo $pd['sub_id']; ?>&id=<?php echo $pd['id']; ?>">
                                    <h5><?php echo $pd['name']; ?></h5></a>
                                 </div>
                    		</div>
               			 </div>
              <?php } ?>
              
			  
			  <?php /*?>  <!-- Top Catagory Area -->
                <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <img src="img/bg-img/desserts.jpg" alt="">
                        <!-- Content -->
                        <div class="top-cta-content">
                            <h3>Kashmiri Desserts</h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="kashmiri-desserts.php" class="btn delicious-btn">See Full Recipe</a>
                        </div>
                    </div>
                </div>
                <!-- Top Catagory Area -->
                
                <!-- Top Catagory Area -->
                <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <img src="img/bg-img/shakes.jpg" alt="">
                        <!-- Content -->
                        <div class="top-cta-content">
                            <h3>Kashmiri Shakes</h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="kashmiri-shakes.php" class="btn delicious-btn">See Full Recipe</a>
                        </div>
                    </div>
                </div>
                 <div class="col-12 col-lg-6">
                    <div class="single-top-catagory">
                        <img src="img/bg-img/chutney.jpg" alt="">
                        <!-- Content -->
                        <div class="top-cta-content">
                            <h3>Kashmiri Chutneys</h3>
                            <h6>Simple &amp; Delicios</h6>
                            <a href="kashmiri-chutney.php" class="btn delicious-btn">See Full Recipe</a>
                        </div>
                    </div>
                </div><?php */?>
           
           
           
            </div>
        </div>
    </section>
    <?php  } ?>
    <!-- ##### Top Catagory Area End ##### -->

    <!-- ##### Best Receipe Area Start ##### -->
    <?php /*?><section class="best-receipe-area" id="Special">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading">
                        <h3>Kashmiri Special Recipes</h3>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Single Best Receipe Area -->
                <div class="col-12 col-lg-6">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/kehwa.jpg" alt="">
                        <div class="receipe-content">
                            <a href="kehwa.html">
                                <h5>Kashmiri Kehwa</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Single Best Receipe Area -->
                <div class="col-12 col-lg-6">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/pulao.jpg" alt="">
                        <div class="receipe-content">
                            <a href="pulaw.html">
                                <h5>Kashmiri Polaaw</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Single Best Receipe Area -->
                <div class="col-12  col-lg-6">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/harisa.jpg" alt="">
                        <div class="receipe-content">
                            <a href="harisa.html">
                                <h5>Kashmiri Harisa</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Single Best Receipe Area -->
                <div class="col-12 col-lg-6">
                    <div class="single-best-receipe-area mb-30">
                        <img src="img/bg-img/nchai.jpg" alt="">
                        <div class="receipe-content">
                            <a href="noonchai.html">
                                <h5>Kashmiri Noonchai</h5>
                            </a>
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section><?php */?>


    <!-- ##### CTA Area Start ##### -->
    <section class="cta-area bg-img bg-overlay" style="background-image: url(img/bg-img/bg4.jpg);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <!-- Cta Content -->
                    <div class="cta-content text-center">
                        <h2>Kashmiri Cuisine Recipes</h2>
                        <p>I Love To Talk About Cooking And Recipes, But I Love As Much Talking About How Food And Cooking Can Change The World.<br>
                       Don't Be Afraid To Adapt New Ingredients Into Your Own Techniques, And Traditional Ingredients Into New Recipes.<br>A Recipe Has No Soul, You As The Cook Must Bring Soul To The Recipe.</p>
                        <a href="contact.php" class="btn delicious-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ##### CTA Area End ##### -->

    <!-- ##### Small Receipe Area Start ##### -->
    <section class="small-receipe-area section-padding-80-0">
        <div class="container">
            <div class="row">


    <!-- ##### Quote Subscribe Area Start ##### -->
    <section class="quote-subscribe-adds">
        <div class="container">
            <div class="row align-items-end">
                <!-- Quote -->
                <div class="col-12 col-lg-4">
                    <div class="quote-area text-center">

                        <span>"</span>
                        <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                        <p>John Smith</p>
                        <div class="date-comments d-flex justify-content-between">
                            <div class="date">April 04, 2021</div>
                            <div class="comments">2 Comments</div>
                        </div>
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="col-12 col-lg-4">
                    <div class="newsletter-area">
                         
                            <h4>Subscribe to our newsletter</h4>
                                                 
                            <!-- Form -->
                             <div class="newsletter-form bg-img bg-overlay" style="background-image: url(img/bg-img/bg1.jpg);">
                                    
                                 <form action="" id="subscribeForm" method="post" autocomplete="off">
                                    <input type="text"   class="form-control" name="name" placeholder="Enter your name" required="">
                                 <span class="name-message" id="name_msg"></span>
                                  
                                  <input type="email"   class="form-control" name="email" placeholder="Enter your email address" required="">
                                 <span class="email-message" id="email_msg"></span>
                                  <button type="submit" name="submit" id="email_submit" class="btn delicious-btn w-100">Subscribe Now</button>
                                 </form>
                            <p>“Subscribe to our newsletter to get updates of our new recipes.”</p>
                           </div>
                        </div>
                </div>

				<?php
				if(isset($_POST['submit'])) {
				
					$name=mysqli_real_escape_string($con,$_POST['name']);
					$email=mysqli_real_escape_string($con,$_POST['email']);
					
				
						$sel_query=mysqli_query($con,"select * from subscribe_user where email='".$email."'");
						if(mysqli_num_rows($sel_query)>0){ 
							
							echo '<script>swal("Sorry!", "This Email address already exits", "warning");</script>';
						}
						else {
							
							$insert_que="insert into subscribe_user (name,email,date) values('".$name."','".$email."','".$todaydate."')";
							if(mysqli_query($con,$insert_que)) { 
								
									echo '<script>swal("Thank You!", "You are sucessfully subscribed!", "success");</script>';
				
							}
							else {
								echo '<script>swal("s","Please Try again...","error")</script>';
							}
				}
				
				
				
				}
				
				
				 ?>
                
                
                
                
                

            
                 
                <!-- adds -->
                <div class="col-12 col-lg-4">
                    <div class="delicious-add">
                        <img src="img/bg-img/book.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    
               
   
    <!-- ##### Follow Us Instagram Area End ##### -->
<?php  include ('footer.php'); ?>

    <!-- ##### All Javascript Files ##### -->
    <!-- jQuery-2.2.4 js -->
  
   
    <!--<script src="js/jquery/jquery-2.2.4.min.js"></script>-->
    <!-- Popper js -->
   <!-- <script src="js/bootstrap/popper.min.js"></script>-->
    <!-- Bootstrap js -->
   <!-- <script src="js/bootstrap/bootstrap.min.js"></script>-->
    <!-- All Plugins js -->
    <!--<script src="js/plugins/plugins.js"></script>-->
    <!-- Active js -->
    <script src="js/active.js"></script>

<script type="text/javascript">
    
/*$(document).ready(function (){

    $("#email_submit").click(function (){

        var $email_data_var;
        $email_data_var = $("#email_data").val();
        if($email_data_var == ''){
            $("#email_msg").html("Please Enter a Email Address");
        }
        else{

            $.ajax({

                type:'POST',
                url:"ajax/email-submit.php",
                data:{email_data_values : $email_data_var},
                success:function(response){
                    $("#email_msg").html(response);
                }

            });

        }

    });

});
*/
</script>


   
</body>

</html>
