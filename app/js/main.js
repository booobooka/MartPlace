$(function(){

    var mixer = mixitup('.release-products__inner'); 
});

$('.featured__products-slider__inner').slick({
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
});


 
  $(".rateYo").rateYo({
 
    rating    : 5,
    spacing   : "3px",
    starWidth: "15px",
    ratedFill: "#ffc000",
    normalFill: "transparent",
    readOnly: true
    
    
});

/* category btn section  */
$('.category-btn.plugins').on('click', function(){
  $('.category-btn.plugins').addClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.wordpress').on('click', function(){
  $('.category-btn.wordpress').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.site-template').on('click', function(){
  $('.category-btn.site-template').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.psd').on('click', function(){
  $('.category-btn.psd').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.joomla').on('click', function(){
  $('.category-btn.joomla').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.user-interface').on('click', function(){
  $('.category-btn.user-interface').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.landing').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.landing').on('click', function(){
  $('.category-btn.landing').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.software').removeClass('active');
});

$('.category-btn.software').on('click', function(){
  $('.category-btn.software').addClass('active');
  $('.category-btn.plugins').removeClass('active');
  $('.category-btn.wordpress').removeClass('active');
  $('.category-btn.site-template').removeClass('active');
  $('.category-btn.psd').removeClass('active');
  $('.category-btn.joomla').removeClass('active');
  $('.category-btn.user-interface').removeClass('active');
  $('.category-btn.landing').removeClass('active');
});



$('.followers-slider__inner').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  variableWidth: true,
  prevArrow: '<button class="slick-arrow slick-preve"><img src="..//images/icons/lnr-chevron-left.svg"></button>',
  nextArrow: '<button class="slick-arrow slick-nexte"><img src="..//images/icons/lnr-chevron-right.svg"></button>',
});
