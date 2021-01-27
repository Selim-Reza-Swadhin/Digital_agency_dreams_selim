$(document).ready(function() {

    // scroll up button
    $(function() {
        $.scrollUp({
            scrollImg: true,
            scrollSpeed: 600
        });
    });

    // smoth scroll
    var scrollLInk = $(".scrollC");

    scrollLInk.click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });

    // nurmber count up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // water ripple
    $(".hero-section").ripples({
        // dropRadius: 20,
        // perturbance : 0.5,
        // resolution: 300
    });

    //  mixitup js
    var mixer = mixitup(".mymixt");

    // mobile meno icom
    var menuTakiOpen = false;
    $(".mobile-menu-icon").on("click", function() {
        if (menuTakiOpen == false) {
            $(this).find("i").removeClass("fa-bars").addClass("fa-times");
            $(".mobile-meno-bar").css({
                "left": "0"
            });
            menuTakiOpen = true;
        } else {
            $(this).find("i").removeClass("fa-times").addClass("fa-bars");
            $(".mobile-meno-bar").css({
                "left": "100%"
            });
            menuTakiOpen = false;
        }

    });

    window.addEventListener("scroll", scrollhide);

    function scrollhide() {
        if (window.scrollY >= 400) {
            $(".meno-scroll").slideDown()
        } else if (window.scrollY <= 400) {
            $(".meno-scroll").slideUp();
        }
    }




});