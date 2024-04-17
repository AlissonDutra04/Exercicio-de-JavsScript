/*17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.  */

/*let numeroMaca = prompt("Digite o número de maças compradas: ");

numeroMacas = parseInt(numeroMaca);

let custoTotal

if (numeroMaca < 12 ){
    custoTotal = numeroMaca * 1.3;
} else {
    custoTotal = numeroMaca * 1.0;
}

alert("O custo total da compra é:" + custoTotal.toFixed(2)); */

let nota1 = parseFloat(prompt("Digite a primeira nota: "));

let nota2 = parseFloat(prompt("Digtite a segunda nota"));

let mediaAritmetica 

mediaAritmetica = (nota1 + nota2) /2

if (mediaAritmetica >= 6){
    alert("Aluno aprovado")
} else{
    alert("Aluno Reprovado")
}

alert("A nota total do aluno é " + mediaAritmetica)