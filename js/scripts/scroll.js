function scrollTarget() {
  document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (link) {
      const targetId = link.getAttribute("href").substring(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);

      if (target) {
        event.preventDefault();
        const targetOffset = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    }
  });
}

scrollTarget();
