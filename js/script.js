document.addEventListener('DOMContentLoaded', () => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Alterna a visibilidade do menu suspenso ao clicar no avatar do perfil
    profileDropdown.addEventListener('click', (e) => {
        // Impede que o clique feche imediatamente o menu se ele for o destino
        e.stopPropagation(); 
        
        // Alterna a classe 'active' para controlar a visibilidade
        profileDropdown.classList.toggle('active');
        
        // Define o estilo de exibição com base na classe 'active'
        if (profileDropdown.classList.contains('active')) {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });

    // Fecha o menu suspenso se o usuário clicar em qualquer outro lugar do documento
    document.addEventListener('click', () => {
        if (profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
            dropdownContent.style.display = 'none';
        }
    });

    // **NOTA:** Para replicar o carrossel da Netflix (os filmes deslizando para os lados),
    // você precisaria de mais código JavaScript para detectar cliques nas setas
    // (que não estão visíveis na imagem, mas fazem parte da UI) e animar a rolagem
    // da div `.row-posters`.
});