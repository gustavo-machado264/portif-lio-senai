const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("ativo");
    }
  });
}, {
  threshold: 0.6,
});

sections.forEach((secao) => {
  observer.observe(secao);
});
