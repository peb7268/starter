<?php 
    /**
     * Template Name: Home
     */
    get_header(); 
?>

    <h2>Home</h2>

    <div class="content block">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                <?php the_content(); ?>
        <?php endwhile; else : ?>
            <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>

