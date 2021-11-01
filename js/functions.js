(function($) {
    "use strict";

    /* ------------------ HEADER AFFIX ------------------ */

    var $navAffix = $(".header-fixed .navbar-fixed-top");
    $navAffix.affix({
        offset: {
            top: 50
        }
    });


    /* ------------------ NAV SPLIT ------------------ */
	
    var $section = $('.section'),
        $bodyScroll = $('.body-scroll');
    if ($bodyScroll.length > 0) {
        $(window).on("scroll", function() {
            $section.each(function() {
                var sectionID = $(this).attr("id"),
                    sectionTop = $(this).offset().top - 100,
                    sectionHight = $(this).outerHeight(),
                    wScroll = $(window).scrollTop(),
                    $navHref = $("a[href='#" + sectionID + "']"),
                    $nav = $('.nav-split').find($navHref).parent();
                if (wScroll > sectionTop - 1 && wScroll < sectionTop + sectionHight - 1) {
                    $nav.addClass('active');
                    $nav.siblings().removeClass('active');
                }
            });
        });
    }


    /* ------------------  WOW ANIMATED ------------------ */
	
    var wow = new WOW({

        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 50, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

    });

    wow.init();
}(jQuery));