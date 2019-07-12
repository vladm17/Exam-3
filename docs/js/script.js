// Swipers // 

$(document).ready(function () {
    
    var swiper = new Swiper('.swiper-container1', {
        direction: 'vertical',
        allowSlidePrev: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        initialSlide: 0,
        mousewheel: {
            invert: false,
        },
        /*breakpoints: {

            320: {
                
                noSwiping: false,
                allowSlidePrev: true,
                allowSlideNext: true
            },
    
            992: {
            
                noSwiping: false,
                allowSlidePrev: true,
                allowSlideNext: true
            },
    
            1024: {
        
                noSwiping: true,
                allowSlidePrev: false,
                allowSlideNext: false
            }
    
        }*/
        
    });
    swiper.on('slideChangeTransitionStart', function() {
        // console.log(swiper.realIndex);
        switch (swiper.realIndex) {
            case 1:
            case 4:
                $('.swiper-pagination-bullet-active').addClass('swiper-pagination-bullet-active-black')
                break;
            default:
                $('.swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active-black')
                break;
        }
    });
    
    
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
      },
    })
    

      $('#mySidenav').on('click', 'a', function (event) {
          event.preventDefault();
          console.log($(event.target).index());
          swiper.slideTo( $(event.target).index() );
         
      });

      $('.closebtn')
        .click(function (event) {
            event.preventDefault();
            event.stopPropagation();
});

   

      
  });
  



/* Menu */

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("#swiper-container1").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("#swiper-container1").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

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
function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

setTimeout(function() {
    document.querySelector('progress').value = random(10, 100);
}, 0);

/* MAP */ 

var map, marker,
    center = {
        lat: 46.9587616,
        lng: 31.9927977
    };

var image = 'img/Pin.png';

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
        center: center,
        disableDefaultUI: true,
        zoom: 14,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

}
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