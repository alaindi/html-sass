<?php if ( has_post_thumbnail() ) : ?>
    <div class="blogpost-row clearfix">
        <div class="col-md-4">
            <div class="img-cont">
                <?php the_post_thumbnail(); ?>
            </div>
        </div>
        <div class="col-md-8">
            <div class="text-cont clearfix">
            <span class="blog-title"><a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a></span>
                <div class="date-author">
                    <span class="date"><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo get_the_date(); ?></span>
                    <span class="name"><i class="fa fa-user" aria-hidden="true"></i> <?php the_author(); ?></span>
                </div>                               
                <p class="description-list"><?php echo substr(get_the_excerpt(), 0,120);?></p>
                <a href="<?php echo get_permalink(); ?>" class="btn-style">Read More</a>
            </div>
        </div>
    </div>
<?php else : ?>
     <div class="blogpost-row clearfix">
        <div class="col-md-12">
            <div class="text-cont clearfix">
            <span class="blog-title"><a href="<?php echo get_permalink(); ?>"><?php echo get_the_title(); ?></a></span>
                <div class="date-author">
                    <span class="date"><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo get_the_date(); ?></span>
                    <span class="name"><i class="fa fa-user" aria-hidden="true"></i> <?php the_author(); ?></span>
                </div>                               
                <p class="description-list"><?php echo substr(get_the_excerpt(), 0,120);?></p>
                <a href="<?php echo get_permalink(); ?>" class="btn-style">Read More</a>
            </div>
        </div>
    </div>
 <?php endif; ?>    
