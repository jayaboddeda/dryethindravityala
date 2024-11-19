const footerHtml = `<footer class="footer-wrapper footer-layout1 footer-layout4" data-bg-src="assets/img/bg/footer_bg_4.jpg">
        <div class="shape-mockup" data-top="2%" data-right="3%">
            <div class="dna-ani">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
        </div>
        <div class="widget-area">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <div class="th-widget-about">
                                <div class="about-logo">
                                    <a href="/"><img src="assets/img/logo.png" alt="Mediax"></a>
                                </div>
                                <p class="about-text">Subscribe to out newsletter today to receive latest news
                                    administrate cost effective for tactical data.</p>
                                <p class="footer-info">
                                    <i class="fal fa-location-dot"></i>
                                    2478 Street City Ohio 90255
                                </p>
                                <p class="footer-info">
                                    <i class="fal fa-envelope"></i>
                                    <a href="mailto:dryethindravityala@gmail.com"
                                        class="info-box_link">dryethindravityala@gmail.com</a>
                                </p>
                                <p class="footer-info">
                                    <i class="fal fa-phone"></i>
                                    <a href="tel:+40276328246" class="info-box_link">+(402) 763 282 46</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title">Quick Links</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="about.html">Terms of Use</a></li>
                                    <li><a href="faq.html">Help & FAQs</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">Privacy policy</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget widget_nav_menu footer-widget">
                            <h3 class="widget_title ">Quick Links</h3>
                            <div class="menu-all-pages-container">
                                <ul class="menu">
                                    <li><a href="publications.html">Publications</a></li>
                                    <li><a href="accomplishments.html">Accomplishments</a></li>
                                    <li><a href="campaigns.html">Campaigns</a></li>
                                    <li>
                                        <a href="media.html">Media</a>
                                    </li>
                                    <li>
                                        <a href="lectures.html">Lectures</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-auto">
                        <div class="widget footer-widget">
                            <h3 class="widget_title">Let’s Stay In Touch</h3>
                            <div class="newsletter-widget">
                                <p class="footer-text">Subscribe for newsletter</p>
                                <form action="#" class="newsletter-form">
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="Enter Email" required="">
                                    </div>
                                    <button type="submit" class="simple-icon"><i
                                            class="fa-solid fa-paper-plane"></i></button>
                                </form>
                                <div class="form-group">
                                    <input type="checkbox" id="checkbox" name="checkbox">
                                    <label for="checkbox">I agree with the terms & conditions</label>
                                </div>
                                <div class="btn-group d-none">
                                    <a href="https://play.google.com/" class="img-btn">
                                        <img src="assets/img/normal/apple_store.png" alt="icon">
                                    </a>
                                    <a href="https://play.google.com/" class="img-btn">
                                        <img src="assets/img/normal/play_store.png" alt="icon">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row gy-2 align-items-center">
                    <div class="col-md-7">
                        <p class="copyright-text">Copyright <i class="fal fa-copyright"></i> 2024 <a href="/">Dr.
                            Vityala Yethindra</a>. <br> All Rights Reserved.Designed & Developed by
                            <a href="https://webbingprotechnologies.com/" target="_blank">WebbingPro Technologies</a> - <a href="tel:9059329297">9059329297</a></p>
                    </div>
                    <div class="col-md-5 text-center text-md-end">
                        <div class="th-social">
                            <a href="https://www.facebook.com/drvityalayethindra"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://x.com/yethindra001"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/dr-yethindra-vityala-a46b96192/"><i
                                    class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/vityala_yethindra"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;

$(window).on('load', function () {
    $('#footer').html(footerHtml);
})