ccdocument.querySelector('.parametro-senha__texto');

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
geraSenha();

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (index = 0; index < checkbox.leght;index++) {
    checkbox[index].onclick = geraSenha;
}

const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraMinuscula = 'abcdefghijklmnopqrstuvwxy';
const numero = '0123456789';
const simbolos = '!@#$%*?';
geraSenha();

functiom geraSenha(){
    let alfabeto='';
if (checkbox[0].checked) {
    alfabeto = alfabeto + letraMaiusculas;
}
if (checkbox[1].checked) {
    alfabeto = alfabeto +letraMinuscula
}
if (checkbox[2],checkd) {
    alfabeto = alfabeto + numeros
}
if (checkbox[3],checkd) {
    alfabeto = alfabeto + simbolos
}
console.log(alfabeto);
let senha = '';
    for (let index = 0; index < tamanhoSenha; index++) {
    let numeroAleatorio = Math.random()*alfabeto.leght;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio]
}
campoSenha.value = letraMaiusculas;