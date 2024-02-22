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
   

  <?php $receipe=true; include ('header.php'); ?>

	<?php
	$sel_sub=mysqli_query($con,"select * from sub_cat where id='".$_GET['id']."'");
	while($ss1=mysqli_fetch_array($sel_sub)) { ?>

    <!-- ##### Breadcumb Area Start ##### -->
    <!--<div class="breadcumb-area bg-img bg-overlay" style="background-image: url(img/bg-img/wzwn.jpg);">-->
    <div class="breadcumb-area bg-img bg-overlay" style="background-image:url(upload/images/subcategory/banner/<?php echo $ss1['ban_img']; ?>)">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2><!--Kashmiri Wazwan--><?php echo $ss1['name']; ?></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    <!-- ##### Breadcumb Area End ##### -->
     <div class="receipe-post-area section-padding-80">
            <div class="receipe-post-search mb-80">
            <div class="container">
                <form action="search.php" method="get" autocomplete="off" name="search">
                    <div class="row">
                       
                        
                        <div class="col-12 col-lg-3">
                            <input type="text" name="search" required="" placeholder="Search Recipes">
                        </div>
                        <div class="col-12 col-lg-3">
                            <button type="submit" class="btn delicious-btn">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


        

        <!-- Receipe Slider -->
        

        <!-- Receipe Content Area -->
        <div class="receipe-content-area">
            <div class="container">

               <!-- <div class="row">
                   

                    <div class="col-12 col-md-4">
                        <div class="receipe-ratings text-right my-4">
                            <div class="ratings">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                <a href="#" class="btn delicious-btn">Ratings</a>
                            </div>
                            
                        </div>
                    </div>
                </div>-->

                <div class="row">
                    <div class="col-12 col-lg-8">
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <ul>
                            
                            	<?php
								$i=0;
								$pro_sel=mysqli_query($con,"select * from product where action=1 and  sub_id='".$_GET['id']."'");
								if(mysqli_num_rows($pro_sel)>0) {
								while($ps1=mysqli_fetch_array($pro_sel)) { 
								?>
                            
                                 <div class="clr">
                                 <li>
                                    <a href="main-dish.php?alias=<?php echo $ps1['alias']; ?>&subid=<?php echo $ps1['sub_id']; ?>&id=<?php echo $ps1['id']; ?>">
                                     <!--1.  Mutton Roganjosh--><?php echo $i=$i+1; ?>.  <?php echo $ps1['name']; ?></a>
                                    <h5><!--Recipe courtesy of waza brothers--><?php echo $ps1['subtit']; ?></h5>
                                </li>
                               </div>
                               
                               <?php } } else { ?><div class="no_dish"> No Dishes Found...</div> <?php } ?>
                               
                                <!--<div class="clr">
                                 <li>
                                    <a href="tabakmaaz.html"> 2.  Tabakmaaz</a>
                                    <h5>Recipe courtesy of waza brothers</h5>
                                </li>
                               </div>
                                <div class="clr">
                                 <li>
                                    <a href="d-korma.php"> 3.  Daniwal Korma</a>
                                    <h5>Recipe courtesy of waza brothers</h5>
                                </li>
                               </div>
                               <div class="clr">
                                 <li>
                                    <a href="chicken.php"> 4.  Kshmiri Chicken</a>
                                    <h5>Recipe courtesy of waza brothers</h5>
                                </li>
                               </div>
                               <div class="clr">-->
                            
                        </ul>
                    </div>
                </div>
              
               <!--<div class="ingredients">
                      <ul>
                        
                        <div class="clr">
                         	<li>
                                <a href="rista.php"> 5.  Rista</a>
                                <h5>Recipe courtesy of waza brothers</h5>
                            </li>
                           </div>
                           
                           <div class="clr">
                             <li>
                                <a href="gushtaba.php"> 6.  Gushtaba</a>
                                <h5>Recipe courtesy of waza brothers</h5>
                            </li>
                           </div>
                           
                           <div class="clr">
                             <li>
                                <a href="mkorma.php"> 7.  Marchwangan Korma</a>
                                <h5>Recipe courtesy of waza brothers</h5>
                            </li>
                           </div>
                          
                           <div class="clr">
                             <li>
                                <a href="a-gosh.php"> 8.  Aab Gosht</a>
                                <h5>Recipe courtesy of waza brothers</h5>
                            </li>
                           
                           </div>
                       
                 </div> -->
                
                 <!--<div class="row">
                    <div class="col-12 ">
                        <div class="section-heading text-left">
                            <h2>Leave a comment</h2>
                        </div>
                    </div>
                </div>    --> 
                   
              <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="contact-form-area">
                          <!--  <form action="submit.php" id="frmDemo" method="post">
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
                            </form>-->
                        </div>
                    </div>
                    
                <?php /*?>    <div class="col-6">
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
                                 
                                 <div class="card-body  py-2"><p class="card-text"><?= $row['message']?></p></div>
                                 <div class="card-footer  py-2">
                                   <div class="float-right">
                                      <a href="" class="text-danger mr-1" onclick="return confirm('Do you want to delete this comment?');" title="Delete"><i class="fas fa-trash">
                                      </i></a>
                                    </div>
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
                    </div><?php */?>
               </div>
           </div>
       </div>
                                   
                                
               

   
<?php include ('footer.php'); ?>
    <!-- ##### Footer Area Start ##### -->

    <script>
/*$("#frmDemo").submit(function(e) {
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
})*/
</script>   
            
<script src="js/active.js"></script>
</body>

</html>