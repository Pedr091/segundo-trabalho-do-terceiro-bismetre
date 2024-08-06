// Seleciona todos os botões com a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um event listener para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Seleciona o passo atualmente ativo
        const atual = document.querySelector('.passo.ativo');
        // Obtém o próximo passo a partir do atributo 'data-proximo' do botão clicado
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');
        // Adiciona a classe 'ativo' ao próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
