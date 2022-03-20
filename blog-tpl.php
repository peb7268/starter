<?php 
    /** Template Name: Blog Tpl  */ 
    get_header();
?>

<div class="posts wrapper-inner">
    <?php 

    $query = new WP_Query(array(
        'posts_per_page'   => -1,
        'post_type'        => 'post'
    ));
    
    if ( $query -> have_posts() ) : while ($query -> have_posts() ) : $query -> the_post(); ?>
        <div class="post">
            <div class="left">
                <div class="post-img">
                    <img src="http://lorempixel.com/400/200/" alt="" />
                </div>
            </div>
            <div class="right">
                <a href="<?php the_permalink(); ?>">
                    <h2><?php the_title(); ?></h2>
                </a>
                <?php the_excerpt(); ?>
                <a href="<?php the_permalink(); ?>" class="read-more btn">read more</a>
            </div>
        </div>
    <?php endwhile; else : ?>
        <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
    
    <?php wp_reset_postdata(); ?>
</div>

<?php get_footer(); ?>
