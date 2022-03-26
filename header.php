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
</header>

<?php if (is_page() && ! is_page('home')) { ?>
    <div class="banner-img">
        <h2 class="page_name">
            <?php echo $pagename; ?>
        </h2>
        <img src="<?php echo THEME_PATH; ?>/img/<?php echo $pagename; ?>.jpg" alt="banner-image" />
    </div>
<?php } ?>

<h1>header</h1>