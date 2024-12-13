// Selecionar elementos
const stars = document.querySelectorAll('.star-rating span');
const ratingLabel = document.querySelector('.rating-label');
const form = document.getElementById('reviewForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Variável para armazenar a avaliação
let ratingValue = 0;

// Função para lidar com o clique em estrelas
stars.forEach((star) => {
    star.addEventListener('click', () => {
        // Obter valor da estrela clicada
        ratingValue = star.getAttribute('data-value');

        // Atualizar a aparência das estrelas
        stars.forEach((s) => s.classList.remove('selected'));
        star.classList.add('selected');
        star.previousElementSibling?.classList.add('selected');
        
        // Atualizar o rótulo com a avaliação
        ratingLabel.textContent = `Você avaliou com ${ratingValue} estrelas`;
    });
});

// Função para enviar o formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar se o usuário selecionou uma avaliação
    if (ratingValue === 0) {
        alert('Por favor, selecione uma avaliação.');
        return;
    }

    // Simular envio do formulário e mostrar mensagem de agradecimento
    form.style.display = 'none';
    thankYouMessage.classList.remove('hidden');
});
