// var swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

const bannerSwiper = new Swiper('.banner__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  centeredSlides: true,
  breakpoints: {
    980: {
      width: 400,
    },
    1200: {
      width: 560,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const projectsLivingSwiper = new Swiper('.projects__swiper-living', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const projectsCommerceSwiper = new Swiper('.projects__swiper-commerce', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
