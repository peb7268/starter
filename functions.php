<?php require(__DIR__.'/../../../vendor/autoload.php');

if ( $_ENV['DEBUG'] === "true" ) {
    echo "<pre>";
    print_r($_ENV);
    echo "</pre>";
    die('');
}

/* Globals */
define('DOMAIN', $_ENV['PROTOCOL']."://".$_ENV['WP_SITEURL']);
define('THEME_PATH', get_stylesheet_directory_uri());
define('JS_PATH', THEME_PATH.'/js');
define('IMG_PATH', THEME_PATH.'/img');
define('BASE_URL', ($_ENV['IS_LOCAL'] === "false")  ? $_ENV['PRODUCTION_DOMAIN'] : DOMAIN.':3000');

/* House Keeping */
remove_filter('the_content','wpautop');
remove_filter('the_excerpt', 'wpautop');

/* Initial Theme Config */
function init_front_end() {
    wp_deregister_script('jquery');

    wp_register_style('font_awesome', 'https://kit.fontawesome.com/3bf5de5291.js', [], false, 'all');
    wp_enqueue_style('font_awesome');
    // // wp_register_script( string $handle, string|bool $src, string[] $deps = array(), string|bool|null $ver = false, bool $in_footer = false )
    // wp_deregister_script('jquery');

    // wp_register_script('flip', "http://etflooringexperts.com/wp-content/themes/etflooring/js/jquery.flip.js", array('jquery'), false, true);
    // wp_register_script('jquery', "http://staging.littletonmsr.com/wp-content/themes/littletonmsr/js/jquery.min.js", array(), false, false);
    // wp_register_script('slick', "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", array(), false, false);
    
    // wp_register_script('bundle', "http://littletonmsr.com/wp-content/themes/littletonmsr/dist/app.bundle.js", array(), false, true);

    
    wp_register_script('bundle', BASE_URL.'/wp-content/themes/littletonmsr/dist/app.bundle.js', array(), true, false);
    wp_enqueue_script('bundle');

    // wp_enqueue_script('flip');
    // if(is_page_template('single.php')) { die('true'); }

    // if(is_front_page()) {
    //     // wp_enqueue_script('jquery');

    //     // wp_enqueue_script('slick');
        
    // } else {
    //     wp_enqueue_script('bundle');
    // }
}

function register_custom_menus() {
    register_nav_menus(
        array(
            'primary' => 'Main Nav',
            'secondary' => 'Footer Nav'
        )
    );
}
    
add_action( 'init', 'register_custom_menus' );
add_action( 'wp_enqueue_scripts', 'init_front_end' );

function new_excerpt_more( $more ) {
    return '';
}
add_filter('excerpt_more', 'new_excerpt_more');


// Vanity Shortcodes
function img_path_func($atts){
	return IMG_PATH;
}

function theme_path_func($atts) {    
    return THEME_PATH;
}

function base_domain_func($atts) {    
    return BASE_URL;
}

add_shortcode('_IMG_PATH', 'img_path_func');
add_shortcode('_THEME_PATH', 'theme_path_func');
add_shortcode('_BASE_URL', 'base_domain_func');