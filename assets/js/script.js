const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    const mensagemExibida = 'Você é capaz de conquistar grandes coisas!';

    mensagem.innerHTML = mensagemExibida
})