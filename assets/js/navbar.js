const navHtml = `  <div class="preloader ">
        <button class="th-btn preloaderCls d-none">Cancel Preloader </button>
        <div class="preloader-inner">
            <div class="loader"></div>
        </div>
    </div>
<!--==============================
    Mobile Menu
  ============================== -->
    <div class="th-menu-wrapper">
        <div class="th-menu-area text-center">
            <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
            <div class="mobile-logo">
                <a href="/"><img src="assets/img/logo.png" alt="Mediax"></a>
            </div>
            <div class="th-mobile-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li>
                        <a href="publications.html">Publications</a>
                    </li>
                    <li>
                        <a href="#">Awards</a>
                    </li>
                    <li>
                        <a href="blog.html">Blogs</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Lectures</a>
                    </li>
                    <li>
                        <a href="#">Campaigns</a>
                    </li>
                </ul>
            </div>
        </div>
    </div><!--==============================
	Header Area
==============================-->
<header class="th-header header-layout1">
    <div class="header-top">
        <div class="container">
            <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                <div class="col-auto d-none d-lg-block">
                    <div class="header-links">
                        <ul>
                            <li class="d-none d-sm-inline-block"><i class="fas fa-phone icon-btn"></i><b>Phone:</b> <a href="tel:+1636543569">+163-654-3569</a></li>
                            <li class="d-none d-sm-inline-block"><i class="fas fa-envelope icon-btn"></i><b>Email:</b> <a href="mailto:info@mediax.com">dryethindravityala@gmail.com</a></li>
                            <li class="d-none d-xxl-inline-block"><i class="fas fa-location-dot icon-btn"></i> 1 Barnes Jewish Hospital Plaza, United States</li>
                        </ul>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="header-links">
                        <ul>
                            <li class="d-none d-md-inline-block">
                                <div class="dropdown-link d-none">
                                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="true"><img src="assets/img/icon/english.png" alt="icon"> English</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                        <li>
                                            <a href="#">German</a>
                                            <a href="#">French</a>
                                            <a href="#">Italian</a>
                                            <a href="#">Latvian</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="social-links">
                                    <span class="social-title">Follow Us On: </span>
                                    <a href="https://www.facebook.com/drvityalayethindra"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://x.com/yethindra001"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/dr-yethindra-vityala-a46b96192/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com/vityala_yethindraa"><i class="fab fa-instagram"></i></a>
                                    <a href="" class="d-none"><i class="fab fa-youtube"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="sticky-wrapper">
        <!-- Main Menu Area -->
        <div class="menu-area">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto">
                        <div class="header-logo align-content-center">
                            <div class="logo-bg" data-bg-src="assets/img/bg/logo_bg_1.png"></div>
                            <a href="/"><img src="assets/img/logo.png" width="250" height="100" alt="Dr. Yethindra Vityala."></a>
                        </div>
                    </div>
                    <div class="col-auto d-none d-lg-inline-block">
                        <nav class="main-menu d-none d-lg-inline-block">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li>
                                    <a href="publications.html">Publications</a>
                                </li>
                                <li>
                                    <a href="#">Awards</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blogs</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                </li>
                                <li>
                                    <a href="#">Lectures</a>
                                </li>
                                <li>
                                    <a href="#">Campaigns</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-auto">
                        <div class="header-button">
                            <button type="button" class=" icon-btn searchBoxToggler d-none "><i class="far fa-search"></i></button>
                            <button type="button" class="d-none icon-btn sideMenuCart">
                                <span class="badge">5</span>
                                <i class="far fa-cart-shopping"></i>
                            </button>
                            <a href="appointment.html" class="th-btn">Book Appointment</a>
                            <button type="button" class="icon-btn sideMenuInfo d-none"><i class="far fa-bars"></i></button>
                            <button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`;

$(window).on('load', function () {
    $('#navbar').html(navHtml);
    if (!window.location.href.includes('.html')) {
        $('#navbar').find('.header-top').hide();
        $('#navbar').find('.th-header').addClass('header-layout5');
    }
})