  const typingElement = document.querySelector('.typing');
  const text = `Olá! Eu sou Gustavo Machado.\nDesenvolvedor web em formação pelo SENAI Morvan Figueiredo.`;
  let index = 0;

  function type() {
    if (index < text.length) {
      let char = text[index];

      if (char === '\n') {
        typingElement.innerHTML += '<br>';
      } else {
        typingElement.innerHTML += char;
      }

      index++;
      setTimeout(type, 60);
    }
  }

  type();

  const canvas = document.getElementById("binario-fundo-section");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const binarios = "01";
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(17, 17, 17, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FFF7";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = binarios.charAt(Math.floor(Math.random() * binarios.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 50);