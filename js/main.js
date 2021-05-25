$(document).ready(function () {


    "use strict";

    // customize owl 
    $(".mrg .owl-carousel").owlCarousel({
      items: 4,
      rtl: true,
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: false,
      responsive: {
        425: {
          items:1,
        },
        500: {
            items:2,
          },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
})  