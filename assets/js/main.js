


var swiper = new Swiper(".servicesSwiper", {
  slidesPerView: 1.20,
  spaceBetween: 20,
  initialSlide: 3,
  loop: true,
  navigation: {
    nextEl: ".services-button-next",
    prevEl: ".services-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.60,
    },
    800: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    }
  },
});