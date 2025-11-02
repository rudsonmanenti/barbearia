 // Atualiza o ano automaticamente no rodapé
    document.getElementById('year').textContent = new Date().getFullYear();


  // Seleciona os elementos
  const hamb = document.getElementById('hamb');
  const nav = document.getElementById('nav');

  // Alterna visibilidade do menu ao clicar no ícone
  hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  const links = document.querySelectorAll('#nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

