// Passo 1 - Pegar os botões de personagem
const botoesPersonagem = document.querySelectorAll('.botoes .botao');

// Passo 2 - Adicionar evento de clique aos botões
botoesPersonagem.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remover a classe 'selecionado' de todos os botões
        botoesPersonagem.forEach(botao => {
            botao.classList.remove('selecionado');
        });
        // Adicionar a classe 'selecionado' ao botão clicado
        botao.classList.add('selecionado');

        // Passo 1 - Pegar os personagens
        const personagens = document.querySelectorAll('.personagem');

        // Passo 3 - Verificar se já existe um personagem selecionado e removê-lo
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove('selecionado');
        }

        // Passo 2 - Adicionar a classe 'selecionado' ao personagem correspondente
        const indiceBotao = Array.from(botoesPersonagem).indexOf(botao);
        const personagemCorrespondente = personagens[indiceBotao];
        personagemCorrespondente.classList.add('selecionado');
    });
});
