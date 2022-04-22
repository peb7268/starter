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

    <script src="https://kit.fontawesome.com/79aab98671.js" crossorigin="anonymous"></script>
    <title>
        <?php bloginfo('name'); ?> | <?php bloginfo('description'); ?>
    </title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div class="wrapper">
    <ul class="top-nav">
        <li class="phone"><a href="tel:770.867.5309">770.867.5309</a></li>
        <li class="email"><i class="fa-solid fa-envelope"></i></i></li>
        <li class="instagram"><i class="fa-brands fa-instagram-square"></i></li>
        <li class="facebook"><i class="fa-brands fa-facebook-square"></i></li>
    </ul>

    <header>
        <h1 id="logo">
            dominion
            <span>renovation</span>
        </h1>
        <a href="#" id="mobile-nav">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
        <ul class="nav">
            <li><a href="#">about</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">our work</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </header>
</div>

<div class="content wrapper">
    <?php if (is_page() || is_home()) { ?>
        <div class="banner-img">
            <?php if( strlen($pagename) === 0 ) { $pagename = "home"; } ?>
            
            <?php if( ! is_home() ) { ?>
                <h2 class="page_name">
                    <?php echo $pagename; ?>
                </h2>
            <?php } ?>
            
            <img src="<?php echo THEME_PATH; ?>/img/<?php echo $pagename; ?>.jpg" alt="banner-image" />
        </div>
    <?php } ?>

