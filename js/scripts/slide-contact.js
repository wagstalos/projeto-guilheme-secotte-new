function slideContact() {
  if (document.querySelector(".s-contact__swiper")) {
    const swiper = new Swiper(".s-contact__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next-contact",
        prevEl: ".swiper-button-prev-contact",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
    });
  }
}

slideContact();
