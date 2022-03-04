// @prepros-prepend '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
// @prepros-prepend '../../node_modules/aos/dist/aos.js';
// @prepros-prepend '../../node_modules/swiper/swiper-bundle.js';
// @prepros-prepend 'tpj-plugins/tpj-plugin--back-to-top.js';
// @prepros-prepend 'legacy/jquery-ias.js';
// Regular jQuery functions
jQuery(function ($) {
    if (typeof ShowMap == "function")
        ShowMap({
            fillColour: "#068743",
            strokeColour: "#068743",
        });
    if ($("#article-body").length) {
        $("#article-body img").addClass("img-responsive");
    }
    // property carousel
    $("#property-carousel").carousel({
        interval: false,
    });
    $("#property-thumbnails").carousel({
        interval: false,
    });
    if ($('a[href="#property-location"]').length) {
        $('a[href="#property-location"]').on("shown.bs.tab", function () {
            PropertyMap.triggerResize();
        });
    }
    // Change header background on scroll
    var header = $("#header");
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.removeClass("header-default").addClass("header-scrolled");
        } else {
            header.removeClass("header-scrolled").addClass("header-default");
        }
    });
    // Smooth scrolling link
    $(".smoothscroll").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            { scrollTop: $(hash).offset().top - 80 },
            500,
            function () {}
        );
    });
    // Testimonial Fade, uses jQuery Cycle function built into the Uber App
    if ($(".testimonial-fade").cycle) {
        $(".testimonial-fade").cycle({
            fx: "fade", // choose your transition type, ex: fade, scrollUp, shuffle, etc...
            slideResize: 0,
            timeout: 5000,
        });
    }
    // Close sticky valuation
    if ($(".sticky-val").length) {
        $(".sticky-val .close").on("click", function (e) {
            e.preventDefault();
            $(".sticky-val").animate({
                right: "-999px",
            });
        });
    }
});
AOS.init({
    disable: window.innerWidth < 991,
});
