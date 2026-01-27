fetch('header.html')

  .then(res => res.text())
  .then(html => {
    document.getElementById('header-container').innerHTML = html;

    // Detecta a página atual
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Marca o link ativo
    document
      .querySelectorAll('#header-container a')
      .forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || href === `./${currentPath}`) {
          link.classList.add('active');
        }
      });

    if (window.initMenuMobile) window.initMenuMobile();
    if (window.initStickyHeader) window.initStickyHeader();
  });