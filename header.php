<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/styles/css/styles.css">

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

    <script src="https://kit.fontawesome.com/0921e7b637.js" crossorigin="anonymous"></script>
    <title>
        <?php bloginfo('name'); ?> | <?php bloginfo('description'); ?>
    </title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
    <a href="#" id="mobile-nav">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </a>

    <div class="header-top">
        <div class="left">
            <ul class="menu left">
                <div class="menu-header">
                    <a href="#" class="login-register" title="login / register">
                        <i class="far fa-user-circle"></i>
                    </a>
                </div>
            </ul>
        </div>
        <div class="middle"></div>
        <div class="right">
            <a href="tel:720-981-9400" class="phone">720-981-9400</a>
            <a href="https://goo.gl/maps/uo9PDbFgg24Kv1ou7" class="directions" target="_blank">
                <i class="fas fa-map-marked-alt"></i>
            </a>
            <a href="mailto:info@LittletonMSR.com">
                <i class="far fa-envelope"></i>
            </a>
        </div>
    </div>

    <div class="wrapper-inner">
        <div class="left"></div>
        <div id="logo" class="center">
            <a href="<?php bloginfo('wpurl');?>">
                <!-- <img src="https://littletonmsr.com/wp-content/uploads/2020/06/FinalHor-e1591119526486.png" alt="logo"> -->
                <h1>littleton massage</h1>
                <div class="tagline">
                    <span>&amp; sports</span>
                    <span>recovery</span>
                </div>
            </a>
        </div>
        <div class="right">
            <?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
        </div>
    </div>
</header>

<?php if (is_page() && ! is_page('home')) { ?>
<div class="banner-img">
    <h2 class="page_name">
        <?php echo $pagename; ?>
    </h2>
    <img src="<?php echo THEME_PATH; ?>/img/<?php echo $pagename; ?>.jpg" alt="banner-image" />
</div>
<?php } ?>

