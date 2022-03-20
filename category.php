<?php get_header(); ?>
    <div class="page-header wrapper-inner">
        <div id="shutter"></div>
    </div>

    <div class="content wrapper-inner">
        <?php  if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="archive post">
                <h2><?php the_title(); ?></h2>
            
                <div class="archive-banner">
                    <img src="http://via.placeholder.com/1200x300" alt="" />
                </div>

                <?php the_excerpt(); ?>
                <a href="<?php the_permalink(); ?>" class="read-more">read more...</a>
            </div>
        <?php endwhile; else : ?>
            <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; wp_reset_postdata(); ?>
    </div>
<?php get_footer(); ?>