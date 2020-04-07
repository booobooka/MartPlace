$(function(){

    var mixer = mixitup('.release-products-inner'); 
});

$('.products-slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
  });
