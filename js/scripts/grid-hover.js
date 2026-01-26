const sectionDifferences = document.querySelector(".s-differences");

if (sectionDifferences) {
  sectionDifferences.addEventListener("mousemove", (e) => {
    const rect = sectionDifferences.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionDifferences.style.setProperty("--mouse-x", `${x}px`);
    sectionDifferences.style.setProperty("--mouse-y", `${y}px`);
  });
}
