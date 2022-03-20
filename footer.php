       <footer id="page-footer">
           <a href="#" class="footer-toggle">
               <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
           </a>

            <div class="left contact-us">
                <h4 class="section-title">contact us</h4>

                <div class="block">
                    <p class="phone">call us</p>
                    <a href="tel:(720) 981-9400" class="telephone">
                        <i class="fa fa-phone"></i>
                        <span class="text">
                            (720) 981-9400
                        </span>
                    </a>
                </div>

                <div class="block">
                    <p class="mail">email us</p>
                    <a href="mailto:info@LittletonMSR.com" class="email">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span class="text">info@LittletonMSR.com</span>
                    </a>
                </div>

                <div class="block">
                    <p class="map">our location</p>
                    <a class="location">
                        <div class="left">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div class="right">
                            <span class="text">
                                5894 S. Zang Street Suite 1B <br>
                                Littleton, CO 80127
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="center-1">
                <!-- <h4 class="section-title">treat yourself</h4> -->
                <div class="block footer-cta">
                    <section>
                        <h4>give the gift of optimal mobility</h4>
                        <p>
                            Help yourself or a loved one accelerate their mobility, live pain free, stay active, <br> and age well. 
                            Gift cards are availible in any custom amount.
                             <!-- you know to a massage, sports recovery, sauna sessions, or on-going membership. -->
                        </p>

                        <div class="block purchase-cert">
                            <a href="https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=2&tabID=3" class="btn btn-rnd" target="_blank">purchase</a>
                        </div>
                    </section>
                    <!-- <section>
                        <img src="http://via.placeholder.com/200x275" alt="">
                    </section> -->
                </div>
            </div>
            
            <div class="right footer-menu">
                <h4 class="section-title">look around</h4>
                <?php wp_nav_menu( array( 'theme_location' => 'secondary' ) ); ?>
            </div>

            <div class="center-2 get-in-touch">
                <h4 class="section-title">get in touch</h4>
                <form action="">
                    <div class="block">
                        <input type="text" name="name"   class="name" placeholder="Name">
                        <div class="spacer"></div>
                        <input type="email" name="email" class="email" placeholder="Email">
                    </div>
                    <div class="block">
                        <textarea name="message" id="msg" cols="30" rows="10" placeholder="Message..."></textarea>
                    </div>

                    <div class="block">
                        <input type="submit" name="submit" value="submit">
                    </div>
                </form>
            </div>
            <?php wp_footer(); ?>
        </footer>
    </body>
</html>