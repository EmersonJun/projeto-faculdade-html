document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');

    // Capturar todas as seções e conteúdo do site
    const sections = document.querySelectorAll('main section, main div');

    // Função de busca
    function searchContent() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === '') {
            searchResults.textContent = 'Por favor, insira um termo para buscar.';
            return;
        }

        let found = false;
        searchResults.textContent = ''; // Limpa resultados anteriores

        sections.forEach(section => {
            const textContent = section.textContent.toLowerCase();

            if (textContent.includes(query)) {
                section.style.backgroundColor = '#444444'; // Destaca a seção encontrada
                section.style.border = '2px solid #00bcd4';
                found = true;
            } else {
                section.style.backgroundColor = ''; // Remove o destaque de seções não relevantes
                section.style.border = '';
            }
        });

        searchResults.textContent = found
            ? `Resultados encontrados para "${query}".`
            : `Nenhum resultado encontrado para "${query}".`;
    }

    // Adiciona evento ao botão
    searchButton.addEventListener('click', searchContent);

    // Adiciona evento ao pressionar Enter no campo de busca
    searchInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            searchContent();
        }
    });
});
