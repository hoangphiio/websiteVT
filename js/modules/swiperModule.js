export default function swiperModule() {
  var bannerImg = document.querySelectorAll(".img-small");
  var menu = [];
  bannerImg.forEach((item) => {
    menu.push(item.innerHTML);
  });
  console.log(menu);
  console.log(bannerImg);
  var banner = new Swiper(".banner-inner .swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1500,
    autoplay: {
      delay: 4000,
    },
    loop: true,
    watchSlidesProgress: true,
    slidesPerView: 1,
  });

  const partnerImg = new Swiper(".event-inner .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".event-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 3,
      },
    },
  });

  const fbSwiper = new Swiper(".feedback-inner .swiper", {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true,
    },
  });

  const swiperHistory = new Swiper(".history-inner-swipper .swiper", {
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    speed: 1800,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".history-inner-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tablist-swiper-next",
      prevEl: ".tablist-swiper-prev",
    },
  });

  const swiperCard = new Swiper(".customer-inner-card .swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    speed: 1800,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".event-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 3,
      },
    },
  });

  const swiperTablist = new Swiper(".tablist-inner-panel-swipper .swiper", {
    loop: true,
    observer: true,
    observeParents: true,
    loopedSlides: 4,
    spaceBetween: 20,
    speed: 1800,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".history-inner-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tablist-swiper-next",
      prevEl: ".tablist-swiper-prev",
    },
  });

}
