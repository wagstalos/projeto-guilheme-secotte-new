function slideService() {
  if (document.querySelector(".s-service__swiper")) {
    const swiper = new Swiper(".s-service__swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

slideService();
