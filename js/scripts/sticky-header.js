function initStickyHeader() {
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo"); // Select the logo element

  window.addEventListener("scroll", function () {
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

window.initStickyHeader = initStickyHeader;
