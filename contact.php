<?php include ('kashmiri-admin/connection/db-file.php'); 
include ('kashmiri-admin/functions/view_det.php'); 
?>
<?php
    $conn = mysqli_connect('localhost', 'root', '', 'kashmiri_db');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
    <!-- Title -->
    <title>Kashmiri Cuisine | Contact</title>

    <!-- Favicon -->
    <link rel="icon" href="img/core-img/favicon.ico">

 <?php include ('website-link.php'); ?>  

</head>

<body>
    <!-- Preloader -->
    

   <?php  $contact=true; include ('header.php'); ?>
   
    <!-- ##### Breadcumb Area Start ##### -->
    <div class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/wzwn.jpg);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2>Kashmiri Cuisine</h2>
                       
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Breadcumb Area End ##### -->

    <!-- ##### Contact Information Area Start ##### -->
    <div class="contact-information-area section-padding-80">
        <div class="container">
           

            <div class="row">
                <!-- Contact Text -->
                <div class="col-12 col-lg-5">
                    <div class="contact-text">
                        <p>I Love To Talk About Cooking And Recipes, But I Love As Much Talking About How Food And Cooking Can Change The World.<br>
                       Don't Be Afraid To Adapt New Ingredients Into Your Own Techniques, And Traditional Ingredients Into New Recipes.<br>A Recipe Has No Soul, You As The Cook Must Bring Soul To The Recipe.</p>
                    </div>
                </div>

                <div class="col-12 col-lg-3">
                    <!-- Single Contact Information -->
                    <div class="single-contact-information mb-30">
                        <h6>Address:</h6>
                        <p>Sri Pratap College <br>M.A road Srinagar, 190001</p>
                    </div>
                    <!-- Single Contact Information -->
                    
                    <!-- Single Contact Information -->
                    <div class="single-contact-information mb-30">
                        <h6>Email:</h6>
                        <p>manshamanzoor1@gmail.com</p>
                    </div>
                </div>

                <!-- Newsletter Area -->
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
								echo '<script>swal("","Please Try again...","error");</script>';
							}
				}
				
				
				
				}
				
				
				 ?>
                
    
    
    
    
    <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="contact-form-area">
                            <form action="submit.php" id="frmDemo" method="post">
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Name">
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input type="email" class="form-control"id="email" name="email" placeholder="E-mail">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject">
                                    </div>
                                    <div class="col-12">
                                        <textarea name="message" class="form-control"id="message" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <div style="float:left">
                                             <button type="submit" name="btn-submit" id="btn-submit" class="btn delicious-btn mt-30" type="submit">Post</button>
                                        </div>
                                        <div id="error_message" class="ajax_response" style="float:left"></div>
                                         <div id="success_message" class="ajax_response" style="float:left"></div>
      
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-6">
                         <div class="col-lg-12 rounded bg-light p-3">
                             <?php
                                 $sql = "SELECT * FROM table1 ORDER BY id DESC";
                                 $res = $conn->query($sql);
                                 while($row=$res->fetch_assoc()){
                            ?>
        
    
                             <div class="card mb-2">
                                <div class="card-header bg-secondary py-1 text-light">
                                   <span class="font-italic">Posted By: <?=$row['name'] ?></span>
                                   <span class=" float-right font-italic">On: <?=$row['cur_date'] ?></span>

                                 </div>
                                 <div class="card-body  py-2">
                                   <p class="card-text"><?= $row['message']?></p>
                                 </div>
                                
                             </div>
                             <?php }

                                  if(isset($_GET['del'])){
                             $id=$_GET['del'];
                             $sql="DELETE FROM table1 WHERE id= '$id'";

                              if($conn->query($sql)){
                                //header('Location: submit.php');
                                 }
                                   }
                              ?>
                         </div>
                    </div>
               </div>
    
    
    
    
    <!-- ##### Contact Information Area End ##### -->

    
    <!-- ##### Contact Form Area End ##### -->

    <!-- ##### Google Maps ##### -->
    <div class="map-area">
    
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11776.707517036899!2d74.80954986866423!3d34.07651383150803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f84d1555555%3A0x8aeaefa2bc953513!2sS%20P%20College%20Srinagar!5e0!3m2!1sen!2sin!4v1620623191384!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
 
     </div>
     <?php include ('footer.php');?> 
    <!-- ##### Follow Us Instagram Area Start ##### -->
    <script>
$("#frmDemo").submit(function(e) {
    e.preventDefault();
    var name = $( "#name").val();
    var email = $("#email").val();
     var subject = $( "#subject").val();
      var message = $( "#message").val();
    
    if(name == "" || email == "" || subject == "" || message == "" ) {
        $("#error_message").show().html("All Fields are Required");
    } else {
        $("#error_message").html("").hide();
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: "name="+name+"&email="+email+"&subject="+subject+"&message="+message,
            success: function(data){
                $('#success_message').fadeIn().html(data);
                setTimeout(function() {
                    $('#success_message').fadeOut("slow");
                }, 2000 );

            }
        });
    }
})
</script>   
   

  
    
<script src="js/active.js"></script>
</body>

</html>
