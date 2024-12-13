// script.js
let currentIndex = 0;
let slides;

window.onload = function() {
    slides = document.querySelectorAll('.Carrossel-imagem');
    
    function mostrar(index) {
        if (index >= slides.length) currentIndex = 0;
        else if (index < 0) currentIndex = slides.length - 1;
        else currentIndex = index;

        const offset = -currentIndex * 100;
        document.querySelector('.Carrossel').style.transform = `translateX(${offset}%)`;
    }

    window.moveSlide = function(step) {
        mostrar(currentIndex + step);
    }

    // Exibir automaticamente a próxima imagem a cada 3 segundos
    setInterval(() => moveSlide(1), 3000);
}
