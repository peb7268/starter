<?php 
    $args  = array('category_name' => 'news');
    $query = new WP_Query($args);

    if( $query->have_posts() ): ?>
    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
        <li class="nau">
            <h4>
                <a href="<?php the_permalink(); ?>">
                    <?php  echo $query->post->post_title; ?>
                </a>
            </h4>
            <p><?php  echo $query->post->post_excerpt; ?></p>
        </li>
    <?php endwhile; ?>
    
    <?php else : ?>
        <p><?php _e( 'Uh oh... no news for now.' ); ?></p>
    <?php endif; ?>