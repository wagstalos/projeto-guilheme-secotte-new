(function() {
  const canvas = document.getElementById("grid-canvas");
  const section = document.querySelector(".s-differences");

  if (!canvas || !section) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const spacing = 70;
  const connectionRadius = 150;
  const mouse = { x: null, y: null };

  function resize() {
    if (!section || !canvas) return;
    const rect = section.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);

    const offsetX = (width - (cols - 1) * spacing) / 2;
    const offsetY = (height - (rows - 1) * spacing) / 2;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        particles.push({
          x: c * spacing + offsetX,
          y: r * spacing + offsetY,
          baseAlpha: 0.2
        });
      }
    }
  }

  function animate() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      let alpha = p.baseAlpha;
      let radius = 1.5;

      // Interactions
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionRadius) {
          const ratio = 1 - distance / connectionRadius;
          alpha = 0.2 + ratio * 0.8;
          radius = 1.5 + ratio * 1.5; // Aumenta um pouco o tamanho quando "acende"
        }
      }

      // Draw Dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 216, 238, ${alpha})`; // Usando o azul do tema para o brilho
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("load", resize);
  
  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  section.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Init
  resize();
  animate();
})();
