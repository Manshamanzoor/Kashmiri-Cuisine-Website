<!-- Search Wrapper -->
    <div class="search-wrapper">
        <!-- Close Btn -->
        <div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>

        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form action="search.php" method="get">
                        <input type="search" name="search" placeholder="Type any keywords...">
                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- ##### Header Area Start ##### -->
    <header class="header-area">

        <!-- Top Header Area -->
        <div class="top-header-area">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-between">
                    <!-- Breaking News -->
                    <div class="col-12 col-sm-6">
                        <div class="breaking-news">
                            <div id="breakingNewsTicker" class="ticker">
                                <ul>
                                    <!--<li><a href="#">Hello World!</a></li>-->
                                    <li><a href="#">Hello World!</a></li>
                                    <li><a href="#">Welcome to Kashmiri Cuisine Family.</a></li>
                                    <li><a href="#">By Mansha & Nisha</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Top Social Info -->
                    <div class="col-12 col-sm-6">
                        <div class="top-social-info text-right">
                            
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        
                
                            <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
                 <!-- Navbar Area -->
        <div class="delicious-main-menu">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Menu -->
                    <nav class="classy-navbar justify-content-between" id="deliciousNav">

                        <!-- Logo -->
                        <a class="nav-brand" href="index.php"><img src="img/core-img/logo.png" alt=""></a>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu">

                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>
                 <!-- Nav Start -->
                            <div class="classynav">
                                <ul>
                                    <li <?php if(isset($home)) { echo 'class="active"'; } ?>><a href="index.php">Home</a></li>

                                    <li <?php if(isset($receipe)) { echo 'class="active"'; } ?>><a href="index.php#recipes">Kashmiri Recipes</a></li>
                                    <li <?php if(isset($special)) { echo 'class="active"'; } ?>><a href="index.php#Special">Kashmiri Special Recipes</a></li>
                                    <!-- <li><a href="#">Healthy Diet</a>
                                        <ul class="dropdown">
                                            <li><a href="#">For Diabetic </a></li>
                                            <li><a href="#">For Thyriod</a></li>
                                            <li><a href="#">For Hypertension </a></li>
                                            <li><a href="#">Nourishing Mother </a></li>
         								</li>
                                        </ul>
                                    </li>-->
                                    <li <?php if(isset($contact)) { echo 'class="active"'; } ?>><a href="contact.php">About Us</a></li>
                                </ul>

                                <!-- Newsletter Form -->
                               <div class="search-btn">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </div>

                            </div>
                            <!-- Nav End -->
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <!-- ##### Header Area End ##### -->