<div class="blog-search">
	<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
		<div class="form-group">
			<label class="sr-only" for="s">Search for: </label>
			<div class="input-group">	
				<input type="text" value="" placeholder="Search" class="form-control" name="s" id="s" />
				<div class="input-group-addon">
					<button id="search" class="btn-orange" data-toggle="tooltip" data-placement="bottom" title="Search for an article">
					<i class="fa fa-search"></i>
					</button>
				</div>
				<!-- <input type="submit" id="searchsubmit" value="Search" /> -->
			</div>
		</div>
	</form>
</div>