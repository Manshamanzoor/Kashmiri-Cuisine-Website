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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>    

    <!-- Title -->
    <title>Kashmiri Cuisine</title>

    <!-- Favicon -->
    <link rel="icon" href="img/core-img/favicon.ico">

  
  <?php include ('website-link.php'); ?>
     
    
   

</head>
<body>
 <div class="col-12 col-lg-4">v
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
								echo '<script>alert("Please Try again...")</script>';
							}
				}
				
				
				
				}
				
				
				 ?>
                
                
</div> 
           
</body>
</html>