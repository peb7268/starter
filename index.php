    <?php get_header(); ?>
        <div class="content">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            
            <?php endwhile; else : ?>
                <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
        </div>
    <?php get_footer(); ?>