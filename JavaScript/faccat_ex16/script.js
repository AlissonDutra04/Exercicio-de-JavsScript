/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. */

let numeroMaca = prompt("Digite o número de maças compradas: ");

numeroMacas = parseInt(numeroMaca);

let custoTotal

if (numeroMaca < 12 ){
    custoTotal = numeroMaca * 1.3;
} else {
    custoTotal = numeroMaca * 1.0;
}

alert("O custo total da compra é:" + custoTotal.toFixed(2));