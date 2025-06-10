// Animação de entrada ao rolar até a seção
const projetos = document.querySelectorAll('.projeto-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1
});

projetos.forEach(projeto => {
  observer.observe(projeto);
});