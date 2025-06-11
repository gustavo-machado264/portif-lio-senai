const canvas = document.getElementById('binarioCanvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01'.split('');
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(columns).fill(1);

function drawBinaryBackground() {
  // Fundo escuro translúcido para rastro
  ctx.fillStyle = 'rgba(17, 17, 17, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FFF7';
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

// Inicia a animação
setInterval(drawBinaryBackground, 50);