$(function () {

  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    //fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });


  var mixer = mixitup('.products__items');


  $('.video__inner-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  
  



});