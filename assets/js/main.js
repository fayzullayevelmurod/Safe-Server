// burger
let burger_btn = document.querySelector(".burger_btn");
let menu_close = document.querySelector(".menu_close");
let menu_bg = document.querySelector(".menu_bg");
let header_link = document.querySelector(".header_link");

burger_btn.addEventListener("click", () => {
  menu_bg.classList.add("active");
  header_link.classList.add("active");
});

menu_close.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  header_link.classList.remove("active");
});

menu_bg.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  header_link.classList.remove("active");
});

header_link.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  header_link.classList.remove("active");
});
// burger


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