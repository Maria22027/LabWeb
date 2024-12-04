
document.getElementById('colorFilter').addEventListener('change', function() {
    document.body.className = '';  // Remove todas as classes de filtro
    const selectedFilter = this.value;
    if (selectedFilter) {
        document.body.classList.add(selectedFilter);  // Aplica a classe de filtro
    }
});
// Função para definir o tamanho da fonte com base no valor selecionado
function setFontSize(size) {
    document.body.style.fontSize = size + 'em';
}

// Ao carregar a página, verifica se há uma preferência salva no Local Storage
window.onload = function() {
    const savedSize = localStorage.getItem('fontSize');
    const fontSizeSelect = document.getElementById('fontSize');
    
    // Se houver uma preferência salva, aplica o tamanho e seleciona a opção correspondente
    if (savedSize) {
        setFontSize(savedSize);
        fontSizeSelect.value = savedSize;
    }

    // Adiciona um listener para mudanças no seletor de tamanho de fonte
    fontSizeSelect.addEventListener('change', function() {
        const selectedSize = this.value;
        setFontSize(selectedSize);

        // Salva a preferência do usuário no Local Storage
        localStorage.setItem('fontSize', selectedSize);
    });
};
// Verificação de compatibilidade do navegador com a Web Speech API
if (!('speechSynthesis' in window)) {
    alert('Este navegador não suporta a síntese de voz.');
}

// Variável para o objeto de fala
let speech = null;

// Função para iniciar ou reiniciar a leitura
function speakText(text) {
    // Para qualquer leitura em andamento
    window.speechSynthesis.cancel();

    // Cria um novo objeto de fala
    speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'pt-BR';
    speech.rate = 1;

    // Inicia a fala
    window.speechSynthesis.speak(speech);
}

// Função para pegar o texto de toda a página
function getTextFromPage() {
    return document.body.innerText;
}

// Evento para o botão de leitura
document.getElementById('readContent').addEventListener('click', function () {
    const pageText = getTextFromPage();
    speakText(pageText);
});

// Evento para o botão de pausa (e retomar se já estiver pausado)
document.getElementById('pauseContent').addEventListener('click', function () {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
    } else if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    }
});

// Evento para o botão de parar
document.getElementById('stopContent').addEventListener('click', function () {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});
