const menuBtn =  document.querySelector('.menu-btn')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click' ,()=>{
	      navlinks.classList.toggle('mobile-menu')
})
// Selecione o botão de menu e o menu dropdown
const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

// Adiciona o evento de clique na imagem do menu
menuIcon.addEventListener("click", () => {
    // Verifica se o menu está visível e alterna sua exibição
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";  // Oculta o menu
    } else {
        dropdownMenu.style.display = "block";  // Exibe o menu
    }
});
