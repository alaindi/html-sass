<section class="blog-content wow fadeInUp">
    <div class="container">
            <?php get_template_part('templates/page', 'header'); ?>
        <div class="row">
            <div class="col-md-8 col-sm-8">
            <!-- if no post  -->
                <?php if (!have_posts()) : ?>
				  <div class="alert alert-warning">
				    <?php _e('Sorry, no results were found.', 'sage'); ?>
				  </div>
				  <?php //get_search_form(); ?>
				<?php endif; ?>
            <!-- if have post -->
                    <?php while (have_posts()) : the_post(); ?>
					  <?php get_template_part('templates/content', 'search'); ?>
					<?php endwhile; ?>
                <div class="blog-pagination clearfix">
                    <?php the_posts_navigation(); ?> 
                </div>
            </div>
            <div class="col-md-4 col-sm-4">                    
                <div class="blog-search">
                   <?php dynamic_sidebar('sidebar-primary'); ?>
                </div>
            </div>
        </div>
    </div>
</section>

