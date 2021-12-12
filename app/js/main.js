$(function () {

  $('.product-tabs__top-item').on('click', function (e) { 
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active')

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.filter-category__label').on('click', function () {
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.products-item').show('1000');
    }
    else{
      $('.products-item').not('.' +value).hide('1000');
      $('.products-item').filter('.' + value).show('1000');
    }
  });

  $('.filter-category__label').on('click', function () {
    $(this).addClass('filter-category__label--active').siblings().removeClass('filter-category__label--active');
  });

  $('.filter-category__label').on('click', function () {
    $('.products-item').addClass('products-item--list');

  });
  $('.filter-category__label').on('click', function () {
      $('.shop-content__inner').addClass('shop-content__inner--active').sibling().removeClass('shop-content__inner--active');
  });

  $('.products-item__link--hover').on('click', function () {
    $('.products-item__link--hover').addClass('products-item__link--btn').sibling().removeClass('products-item__link--btn');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    skin: "flat",
    min: 0,
    max: 700,
    from: 100,
    to: 500,
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

  });
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    //fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.related-product__content').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false
  });

  $('.product-item__num').styler();

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


  $('.video__inner-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


});