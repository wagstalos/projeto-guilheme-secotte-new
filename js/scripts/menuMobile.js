function initMenuMobile() {
  var dotsButton = document.querySelector(".dots");
  var menuMobile = document.querySelector(".menu-mobile");
  var closeIcon = document.querySelector(".icon-tabler-x");
  var links = document.querySelectorAll(".menu-mobile__links a");

  if (dotsButton) {
    dotsButton.addEventListener("click", function () {
      menuMobile.style.display = "block";
      closeIcon.style.display = "block";
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      menuMobile.style.display = "none";
      closeIcon.style.display = "none";
    });
  }

  if (links) {
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        menuMobile.style.display = "none";
        closeIcon.style.display = "none";
      });
    });
  }
}

window.initMenuMobile = initMenuMobile;
