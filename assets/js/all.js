"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  // loop:true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  // loop:true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: false
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
