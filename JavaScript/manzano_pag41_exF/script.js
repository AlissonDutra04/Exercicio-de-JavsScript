/*Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente */

let valorA = parseFloat(prompt("Digite o primeiro valor:"));
let valorB = parseFloat(prompt("Digite o segundo valor:"));
let valorC = parseFloat(prompt("Digite o terceiro valor:"));

if (valorA > valorB && valorA > valorC) {
    if (valorB > valorC) {
        console.log("A ordem crescente é: ", valorC, valorB, valorA);
    } else {
        console.log("A ordem crescente é: ", valorB, valorC, valorA);
    }
} else if (valorB > valorA && valorB > valorC) {
    if (valorA > valorC) {
        console.log("A ordem crescente é: ", valorC, valorA, valorB);
    } else {
        console.log("A ordem crescente é: ", valorA, valorC, valorB);
    }
} else {
    if (valorA > valorB) {
        console.log("A ordem crescente é: ", valorB, valorA, valorC);
    } else {
        console.log("A ordem crescente é: ", valorA, valorB, valorC);
    }
}


