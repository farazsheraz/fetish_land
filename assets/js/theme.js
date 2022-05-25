// NAVBAR START
function close_offcanvas() {
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {
        let offcanvas_id = everyelement.getAttribute('data-trigger');
        everyelement.addEventListener('click', function(e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);
        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton) {
        everybutton.addEventListener('click', function(e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

});

// NAVBAR END

$(document).ready(function() {
    // NAV LINK ACTIVE
    jQuery(function($) {
        var path = window.location.href;
        $("nav ul li a").each(function() {
            if (this.href === path) {
                $(this).addClass("color-green-soil");
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
    $(".clip-slider").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: '<a class="prev"><img src="assets/images/prev.svg" alt=""></a>',
        nextArrow: '<a class="next"><img src="assets/images/next.svg" alt=""></a>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });


    $(".talent-slider").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow: '<a class="prev"><img src="assets/images/prev.svg" alt=""></a>',
        nextArrow: '<a class="next"><img src="assets/images/next.svg" alt=""></a>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // SLICK SLIDER END



});