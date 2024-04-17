/*18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).  */


let anoAtual = parseInt(prompt("Digite o ano Atual:"));

let anoNascimento = parseInt(prompt("Digite o ano que você nasceu: "));

let idade;

idade = anoAtual - anoNascimento

if (idade <=17){
    alert("Voto não obrigatorio: ");
} else {
    alert("Voto obrigatorio");
}



