$(function(){
  $('.featured-products__slider-inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
  });



  $(document).ready(function() {
    $('.js-example-basic-single').select2();
    $('.filter-bar__select-price').select2();
});



 
  $(".rateYo").rateYo({
 
    rating    : 5,
    spacing   : "3px",
    starWidth: "15px",
    ratedFill: "#ffc000",
    normalFill: "transparent",
    readOnly: true
    
    
});

 
$(".rateYoo").rateYo({
 
  rating    : 5,
  spacing   : "3px",
  starWidth: "13px",
  ratedFill: "#ffc000",
  normalFill: "transparent",
  readOnly: true
  
  
});

$('.followers-feed__slider__inner').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  variableWidth: false,
  prevArrow: '<button class="slick-arrow slick-preve"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
  nextArrow: '<button class="slick-arrow slick-nexte"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
  responsive: [
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

$('.menu__btn').on('click', function(){
  $('.header__menu').slideToggle();
});

$('.release-products__dots-button').on('click', function(){
  $('.release-products__dots-menu').slideToggle();
});

$('.header__icon-box--notification-icon').on('click', function(){
  $('.notification-menu').slideToggle();
});
$('.header__icon-box--message-icon').on('click', function(){
  $('.message-menu').slideToggle();
});
$('.header__icon-box--purchases-icon').on('click', function(){
  $('.purchases-menu').slideToggle();
});
$('.header__user-box').on('click', function(){
  $('.user-box__dropdown').slideToggle();
});





$('.icon-list').on('click', function () {
  $('.favorites .release-products__box').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active');
});

$('.icon-normal').on('click', function () {
  $('.favorites .release-products__box').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active');
});

var mixer = mixitup('.release-products__inner'); 
   
});

