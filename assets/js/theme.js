$(document).ready(function() {
    // NAV LINK ACTIVE
    jQuery(function($) {
        var path = window.location.href;
        $("nav ul li a").each(function() {
            if (this.href === path) {
                $(this).addClass("fw-bold");
            }
        });
    });


    //NAVBAR FIXED HIDE STARTS
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $('nav').addClass("bg-black");

        } else {
            $('nav').removeClass("bg-black");
        }

    })

    // AOS Initialize
    AOS.init({
        duration: 1200,
    });



    // SLICK SLIDER - post
    $(".post-slider").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // SLICK SLIDER END

});