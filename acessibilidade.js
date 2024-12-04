// Seleciona os botões
const themeToggleButton = document.getElementById('theme-toggle');
const normalVisionButton = document.getElementById('normal-vision');
const protanopiaButton = document.getElementById('protanopia');
const deuteranopiaButton = document.getElementById('deuteranopia');
const tritanopiaButton = document.getElementById('tritanopia');
const achromatopsiaButton = document.getElementById('achromatopsia');

// Função para alternar o tema claro/escuro
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Funções para aplicar filtros de daltonismo
function applyFilter(filterClass) {
    const body = document.body;
    body.className = ''; // Remove todas as classes
    body.classList.add(filterClass);
    localStorage.setItem('filter', filterClass);
}

// Adiciona eventos de clique
themeToggleButton.addEventListener('click', toggleTheme);
normalVisionButton.addEventListener('click', () => applyFilter('normal-vision'));
protanopiaButton.addEventListener('click', () => applyFilter('protanopia'));
deuteranopiaButton.addEventListener('click', () => applyFilter('deuteranopia'));
tritanopiaButton.addEventListener('click', () => applyFilter('tritanopia'));
achromatopsiaButton.addEventListener('click', () => applyFilter('achromatopsia'));

// Carrega preferências do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFilter = localStorage.getItem('filter') || 'normal-vision';
    document.body.classList.add(savedTheme);
    document.body.classList.add(savedFilter);
});
