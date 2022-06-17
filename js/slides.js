const swiper = new Swiper('.swiper-heroarea', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  allowSlideNext: true,
  loop: true,
});

const swiper2 = new Swiper('.swiper-preview', {

  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  allowSlideNext: true,
  loop: true,
});

const swiperPreview = new Swiper('.swiper-preview--2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  grid: 3,

  
  slidesPerView: 1,
  allowSlideNext: true,

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

const swiperPreview2 = new Swiper('.swiper-preview--3', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  grid: 3,

  
  slidesPerView: 1,
  allowSlideNext: true,

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

const swiperCategoresOne = new Swiper('.swiper-categores-1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  grid: 3,

  
  slidesPerView: 4,
  allowSlideNext: true,

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

const swiperCategoresTwo = new Swiper('.swiper-categores-2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  grid: 3,

  
  slidesPerView: 4,
  allowSlideNext: true,

  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

// const swiper3 = new Swiper('.swiper-3', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//   speed: 400,
//   spaceBetween: 20,
//   slidesPerView: 3,
//   allowSlideNext: true,
//   loop: true,
//   breakpoints: {
//     // when window width is >= 320px
//     100: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//       spaceBetween: 10,
//     },
//     // when window width is >= 480px
//     700: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 640px
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 40
//     }
//   }

// });
var url = window.location.pathname;
if (url.includes('index.html')) {
  setInterval(() => {
    swiper.slideNext();
},  3000)
setInterval(() => {
    swiper2.slideNext();
},  1500)
setInterval(() => {
  swiperPreview.slideNext();
},  2000)
setInterval(() => {
  swiperPreview2.slideNext();
},  2000)
setInterval(() => {
    swiper2.slideNext();
},  5000)

}
// if (url.includes('categories.html')) {
//   setInterval(() => {
//   swiperCategoresOne.slideNext();
// },  2000)
// setInterval(() => {
//   swiperCategoresTwo.slideNext();
// },  2000)
// }


