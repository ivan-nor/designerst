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

const reviewsSwiper = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slideshowClassNames = ['morskoj', 'avatar', 'pushkin']
for (const slideshowName of slideshowClassNames) {
  new Swiper(`#modal-projects__slideshow-${slideshowName} > .projects__slideshow`, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
    navigation: {
      prevEl: `.custom-prev-button-${slideshowName}`,
      nextEl: `.custom-next-button-${slideshowName}`,
    },
    keyboard: {
      enabled: true,
    },
  });
}
