// Funções de acessibilidade para alterar o tamanho da fonte
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
const body = document.body;

increaseFontButton.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize + 2}px`;
});

decreaseFontButton.addEventListener('click', () => {
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    if (currentSize > 12) {
        body.style.fontSize = `${currentSize - 2}px`;
    }
});