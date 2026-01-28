fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      footerContainer.innerHTML = html;
    }
  });
