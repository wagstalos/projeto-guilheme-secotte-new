function stickyHeader() {
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo"); // Select the logo element

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

stickyHeader();
