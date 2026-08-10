document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho

functiom diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha-1;
    }
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#campo-senha');

const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

campoSenha.textContent = letraMaiusculas;