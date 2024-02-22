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
	
    <?php include ('website-link.php'); ?>

</head>

<body>
  
   <?php  include ('header.php'); ?>
   
   <?php
    if($_GET['subid']!=0) {
	$sel_sub=mysqli_query($con,"select * from sub_cat where id='".$_GET['subid']."'");
	while($ss1=mysqli_fetch_array($sel_sub)) { 
	?>

    <!-- ##### Breadcumb Area Start ##### -->
    <div class="breadcumb-area bg-img bg-overlay" style="background-image:url(upload/images/subcategory/banner/<?php echo $ss1['ban_img']; ?>);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2><?php echo $ss1['name']; ?></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } } else { 
	
	$sel_prod=mysqli_query($con,"select * from product where id='".$_GET['id']."'");
	while($ps1=mysqli_fetch_array($sel_prod)) { 
	
	$sel_cat=mysqli_query($con,"select * from main_cat where id='".$ps1['main_id']."'");
	while($ps2=mysqli_fetch_array($sel_cat)) { 
	
	
	?>
    
    
    
    <div class="breadcumb-area bg-img bg-overlay" style="background-image:url(img/bg-img/wzwn.jpg);">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2><?php echo $ps2['name']; ?></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php }  }?>
    
    <?php  }  ?>
    <!-- ##### Breadcumb Area End ##### -->

    <div class="receipe-post-area section-padding-80">

        <!-- Receipe Post Search -->
        <div class="receipe-post-search mb-80">
            <div class="container">
                <form action="search.php" method="get" autocomplete="off">
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


		<?php
		$pro_sel=mysqli_query($con,"select * from product where action=1 and id='".$_GET['id']."'");
		while($ps=mysqli_fetch_array($pro_sel)) { ?>


        <!-- Receipe Slider -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="receipe-slider owl-carousel">
                        <img src="upload/images/product/<?php echo $ps['img2']; ?>" alt="">
                        <?php if($ps['img3']!='') { ?><img src="upload/images/product/<?php echo $ps['img3']; ?>" alt=""><?php } else {} ?>
                        <?php if($ps['img4']!='') { ?><img src="upload/images/product/<?php echo $ps['img4']; ?>" alt=""><?php }else {} ?>
                        <!--<img src="img/bg-img/roganjosh.jpg" alt="">
                        <img src="img/bg-img/roganjosh.jpg" alt="">-->
                    </div>
                </div>
            </div>
        </div>

        <!-- Receipe Content Area -->
        <div class="receipe-content-area">
            <div class="container">

                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="receipe-headline my-5">
                        	
                        
                            <span><!--April 13, 2021--><?php
                        	$date = $ps['date'];
							echo date('F d, Y', strtotime($date)); //June, 2017
							?></span>
                            <h2><!--Kashmiri Mutton Roganjosh--><?php echo $ps['name']; ?></h2>
                            <div class="receipe-duration">
                                <h6>Prep: <!--15 mins--><?php echo $ps['prep']; ?></h6>
                                <h6>Cook: <!--1hr 30 mins--><?php echo $ps['cook']; ?></h6>
                                <h6>Yields: <!--8 Servings--><?php echo $ps['yield']; ?></h6>
                            </div>
                        </div>
                    </div>

                   
                </div>

                <div class="row">
                    <div class="col-12 col-lg-8">
                        <!-- Single Preparation Step -->
                        <div class=t><h4>Directions:</h4></div>
                        <div class="single-preparation-step d-flex">

                           <?php /*?> <h4>01.</h4>
                            <p>BOIL THE MEAT IN THE WATER; REMOVE THE SCUM WITH A LADLE UNTIL THE WATER IS CLEAR. </p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>02.</h4>
                            <p>ADD THE SALT AND THE GARLIC. BOIL UNTIL THE MEAT IS HALF DONE. </p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>03.</h4>
                            <p>REMOVE FROM HEAT AND TAKE OUT THE PIECES OF THE MEAT. WASH THEM IN A PAN OF COLD WATER. KEEP THE MEAT ASIDE. THEN STRAIN THE WATER THROUGH A FINE SIEVE AND COLLECT IT IN ANOTHER PAN. </p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>04.</h4>
                            <p>RETURN THIS PAN TO THE HEAT AND BRING THE WATER TO A BOIL AND ADD THE MEAT. MEANWHILE, HEAT THE GHEE IN A PAN; ADD THE CLOVES, AND SAUTE UNTIL THEY CRACKLE. </p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>05.</h4>
                            <p>REMOVE FROM HEAT AND SPRINKLE A TBSP OF WATER AND COVER.</p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>06.</h4>
                            <p>TO THE BOILING WATER, ADD THE GREEN CARDAMOMS, TURMERIC POWDER, CLOVE-FLAVORED GHEE AND THE ONION PASTE. BOIL FOR ANOTHER 10 MINUTES.</p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>07.</h4>
                            <p>STIR IN THE RED CHILLI WATER. REDUCE HEAT AND COOK COVERED UNTIL THE MEAT IS TENDER. </p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>08.</h4>
                            <p>ADD THE COCKSCOMB FLOWER EXTRACT, SAFFRON WATER AND BLACK PEPPER POWDER. </p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>09.</h4>
                            <p>MIX WELL AND BRING RAPIDLY TO A BOIL. </p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>10.</h4>
                            <p>EAT AND ENJOY </p>
                        </div><?php */?>
                        
                        <h4><?php echo $ps['direction']; ?></h4>
                	  </div>
                    </div>

                    <!-- Ingredients -->
                    <div class="col-12 col-lg-4">
                        <div class="ingredients">
                            <h4>Ingredients:</h4>

							<?php
							if($ps['ingredient']!='') {
							
							$ing_value='';
							$ing=$ps['ingredient'];
							foreach(explode('~',$ing) as $ing_value)
							{
							
							 ?>
                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                <!--<label class="custom-control-label" for="customCheck1">1 KG MEAT-CUT INTO PIECES</label>-->
                                <label class="custom-control-label" for="customCheck1"><?php echo $ing_value; ?></label>
                            </div>
                            <?php } }  ?>

                           <?php /*?> <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                <label class="custom-control-label" for="customCheck2">5 CUPS WATER</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck3">
                                <label class="custom-control-label" for="customCheck3">2 1/4 TSP SALT</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck4">
                                <label class="custom-control-label" for="customCheck4">1 TBSP GROUND GARLIC</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck5">
                                <label class="custom-control-label" for="customCheck5">1 CUP PURE GHEE</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck6">
                                <label class="custom-control-label" for="customCheck6">4 CLOVES (Rong)</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck7">
                                <label class="custom-control-label" for="customCheck7">8 GREEN CARDAMOMS (Nich auleh)</label>
                            </div>

                            <!-- Custom Checkbox -->
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">5 TSP TURMERIC POWDER </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">2 TBSP ONION PASTE-FRIED</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">4 TSP KASHMIRI RED CHILLI POWDER-DISSOLVED IN A CUP OF WATER</label>
                            </div>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">1/2 TSP SAFFRON-GROUND AND ADDED TO 2 TBSP WARM WATER</label>
                            </div>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">1 CUP DRY COCKSCOMB (MAWAL) FLOWERS-HEATED WITH A CUP OF WATER</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                <label class="custom-control-label" for="customCheck8">1/4 TSP BLACK PEPPER POWDER</label>
                            </div><?php */?>
                        </div>
                   

              
            </div>
        </div>
    </div>

	<?php } ?>


   

<?php include ('footer.php'); ?>

    <!-- Active js -->
    <script src="js/active.js"></script>
   
</body>

</html>               
               
           