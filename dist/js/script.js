$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
     
      loop: true
    })
  });


/* Menu */

var menu = !1;
    $(".hamburger-menu").click(function () {
        menu === !1 ? ($("#menu").css("transform", "translateX(0px)"), menu = !menu) : ($("#menu").css("transform", "translateX(330px)"), menu = !menu)
    }), $("h2,menu-title").click(function () {
        $("#menu").css("transform", "translateX(300px)"), menu = !menu
    })
/* Slider Fade */ 

var fade = 1;
    $(".section-3_nav li").click(function () {
        var i = $(this).attr("data-description");
        i != fade && ($(".section-3_description").eq(fade - 1).css("opacity", "0"), setTimeout(function () {
            $(".section-3_description").eq(fade - 1).css("display", "none"), $(".section-3_description-" + i).css("display", "block"), setTimeout(function () {
                $(".section-3_description-" + i).css("opacity", "1")
            }, 15), fade = i
        }, 500)), $(".section-3_nav li").each(function () {
            $(this).css("color", "grey")
        }), $(this).css("color", "#B9B9B9")
    });

/* Smooth Scroll */

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});