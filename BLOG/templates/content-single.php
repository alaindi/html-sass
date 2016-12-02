<section class="blog-content wow fadeInUp">
    <div class="container">
            <?php //get_template_part('templates/page', 'header'); ?>
        <div class="row">
            <div class="col-md-8 col-sm-8">
             <h3 class="title"><?php the_title(); ?></h3>
                <?php  
                  the_content();
                ?>
                <?php wp_link_pages(['before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']); ?>
               <?php comments_template('/templates/comments.php'); ?>  
            </div>
            <div class="col-md-4 col-sm-4">                    
                <div class="blog-search">
                   <?php dynamic_sidebar('sidebar-primary'); ?>
                </div>
            </div>
        </div>
    </div>
</section>