// Seleciona o botão e o body
const switchThemeButton = document.getElementById('switch-theme-button');
const body = document.body;

// Função para alternar o tema
function switchTheme() {
  // Alterna entre as classes light-theme e dark-theme
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema dark');
  } else {
    body.classList.replace('dark-theme', 'light-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema light');
  }
}

// Adiciona o evento de clique no botão
switchThemeButton.addEventListener('click', switchTheme);
