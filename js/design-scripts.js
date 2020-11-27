/* Initialize Swiper Top Slider */
var autoplay = 5000;

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 5,
  // slidesPerView: 2,
  loop: true,
  // freeMode: true,
  loopedSlides: 3, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  autoplay: 5000,
  navigation: {
    nextEl: "#js-prev1",
    prevEl: "#js-prev2",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      direction: 'horizontal',
    },
    1280: {
      direction: 'vertical',
      slidesPerView: 4,
      spaceBetween: 19,
    }
  },
  on: {
    resize: function () {
      galleryThumbs.changeDirection(getDirection());
    }
  }
  
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = windowWidth <= 1280 ? 'horizontal' : 'vertical';

  return direction;
}


var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 3, //looped slides should be the same
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").addClass("animate");
      $(".swiper-progress-bar").addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-progress-bar").removeClass("animate");
      $(".swiper-progress-bar").removeClass("active");
      $(".swiper-progress-bar").addClass("active");
    },
    slideChangeTransitionEnd: function () {
      $(".swiper-progress-bar").addClass("animate");
    }
  }
 
  
});
// galleryTop.controller.control = galleryThumbs;

/* Initialize Swiper News Slider */
var swiperNews = new Swiper('.swiper-container-news', {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({ toggle: true, trigger : 'click'});

})