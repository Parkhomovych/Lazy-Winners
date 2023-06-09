const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
   slidesPerView: 4,
  spaceBetween: 18,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    //  >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  }
  
});

