/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
        /* JS */
        new WOW().init();
        $(document).ready(function(){
                jQuery(".single time").html("") /* remove date on blog comment */

                $('.btn-blue').hover(function(){
                  $(this).parent('.blog-col').toggleClass('div-hover');
                });

              
                 $(window).scroll(function() {
                 if ($(this).scrollTop() > 642) {  
                     $('.nav-area').addClass("sticky");
                    
                   }
                   else{
                     $('.nav-area').removeClass("sticky");
                     
                   }
                   if ($(this).scrollTop() > 1){  
                     $('.content-area').addClass('scrolled');
                   }
                   else{
                     $('.content-area').removeClass('scrolled');
                   }
                 });

               
            });
      /*end sticky*/

      $(document).ready(function() {
               var sections = $('section,footer'), nav = $('nav'), nav_height = nav.outerHeight();
                console.log(nav_height);
              $(window).on('scroll', function () {
                var cur_pos = $(this).scrollTop();
                sections.each(function() {
                  var top = $(this).offset().top - nav_height,
                      bottom = top + $(this).outerHeight();
                  
                  if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find('a').parent('li').removeClass('active');
                    sections.parent('li').removeClass('active');
                    $(this).parent('li').addClass('active');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
                  }
                });
              });
              /*if( jQuery("#home-blog").length > 0 ){*/
                nav.find('a').on('click', function () {
                  var $el = $(this), id = $el.attr('href');
                  $('html, body').animate({
                    scrollTop: $(id).offset().top - (nav_height-1)
                  }, 500);
                  return false;
                });
              /*}*/

              
            });
      /* REDIRECT TO PAGE WHEN FROM BLOG PAGES */
        if( document.location.pathname.indexOf("blog") > 0 || window.location.pathname.split("/").length > 3 || window.location.search==="?s="){
           jQuery("#menu-menu-1 li a").each(function(){
               if( jQuery(this).html() !=="blog"){
                    var pathname= jQuery(this).html().toLowerCase();
                    var hash="";
                    if(pathname ==="book"){
                       hash="#about-book";
                    }else if(pathname ==="author"){ 
                       hash="#about-author";
                    }else if(pathname ==="order"){
                       hash="#order";
                     }else if(pathname ==="contact"){
                       hash="#footer";
                     }
                    jQuery(this).click(function(){
                         if( window.location.href.indexOf('localhost') > 0 ){
                            window.location.href="/brucekirrage/"+hash; 
                           }else{
                            window.location.href="/"+hash; 
                          }
                    });
               }
           });

        }
        /* END REDIRECT TO PAGE WHEN FROM BLOG PAGES */

        /* FIX ALIGNMENT FOR AUTHOR & CONTACT LINK */
        jQuery(document).ready(function(){
            if( window.location.hash === "#about-author" || window.location.hash === "#footer"){
                jQuery("#menu-main-menu li a,#menu-menu-1 li a").each(function(){     
                    var pathname= jQuery(this).html().toLowerCase();
                    var link = jQuery(this);
                    if( (pathname ==="author" && window.location.hash === "#about-author")  || (pathname ==="contact" && window.location.hash === "#footer") ){
                      link.click(); 
                    }           
               });
            }
        });
        /* END FIX ALIGNMENT FOR AUTHOR & CONTACT LINK */
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
