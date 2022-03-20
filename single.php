<?php get_header(); ?>
    <div class="page-header wrapper-inner">
        <div id="shutter"></div>
    </div>

    <div class="content wrapper-inner">
        <?php  if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <h1><?php the_title(); ?></h1>

            <div class="post-meta">
                <div class="author">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    <div class="by">By</div><span class="name"><?php the_author(); ?></span> <span class="on">on</span> <?php the_date(); ?>
                </div>

                <div class="categories">
                    <i class="fa fa-tags" aria-hidden="true"></i>
                    <?php the_category(); ?>
                </div>

                <div class="share">
                    <i class="fa fa-share" aria-hidden="true"></i>

                    <?php
                        $post_title = get_the_title();
                        $post_content = get_the_permalink();
                        $post_body = $post_title." ".$post_content;
                    ?>

                    <a href="https://twitter.com/intent/tweet?text=<?php echo urlencode($post_body); ?>" class="twitter" target="_blank">
                        <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </a>
<!-- 
                    <a href="#" class="facebook" target="_blank">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>

                    <a href="#" class="instagram" target="_blank">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a> -->
                </div>
            </div>

            <div class="single-banner">
                <?php if ( has_post_thumbnail() ) {
                        the_post_thumbnail();
                } ?>
            </div>

            <?php the_content(); ?>
        <?php endwhile; else : ?>
            <p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; wp_reset_postdata(); ?>
    </div>
<?php get_footer(); ?>