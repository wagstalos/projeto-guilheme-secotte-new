const canvas = document.getElementById("grid-canvas");
const section = document.querySelector(".s-differences");

if (canvas && section) {
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const spacing = 70;
  const connectionRadius = 150;

  // Mouse tracking
  const mouse = { x: null, y: null };

  function resize() {
    const rect = section.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    createParticles();
  }

  // Handle late layout shifts
  window.addEventListener("load", resize);

  function createParticles() {
    particles = [];
    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);

    // Calculate offset to center grid
    const offsetX = (width - (cols - 1) * spacing) / 2;
    const offsetY = (height - (rows - 1) * spacing) / 2;

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        particles.push({
          x: c * spacing + offsetX,
          y: r * spacing + offsetY,
          baseAlpha: 0.2, // Base opacity for dots
        });
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      // Draw Dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.baseAlpha})`;
      ctx.fill();

      // Interactions
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionRadius) {
          const alpha = 1 - distance / connectionRadius;
          
          // Draw Line
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168, 216, 238, ${alpha})`; // Blue-ish tint matching theme
          ctx.lineWidth = 1;
          ctx.stroke();

          // Highlight Dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.2 + alpha * 0.8})`;
          ctx.fill();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener("resize", resize);
  
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
}
