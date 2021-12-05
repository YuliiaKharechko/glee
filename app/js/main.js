$(function () {




  //$('.filter-category__btn').on('click', function () {
    //$('.filter-category__btn').removeClass('.filter-category__btn--active');
    //$(this).addClass('.filter-category__btn--active');
  //});

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list')
    
  })


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

  $(".filter-recent__star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    numStars: 5
  
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    //fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var containerEl3 = document.querySelector('[data-ref="container-3"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  var mixer3 = mixitup(containerEl3, config);


  $('.video__inner-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


});