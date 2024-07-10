// burger
let burger_btn = document.querySelector(".burger_btn");
let menu_close = document.querySelector(".menu_close");
let menu_bg = document.querySelector(".menu_bg");
let menu_link = document.querySelector(".menu_link");

burger_btn.addEventListener("click", () => {
  menu_bg.classList.add("active");
  menu_link.classList.add("active");
});

menu_close.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  menu_link.classList.remove("active");
});

menu_bg.addEventListener("click", () => {
  menu_bg.classList.remove("active");
  menu_link.classList.remove("active");
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
    993: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 4,
    }
  },
});