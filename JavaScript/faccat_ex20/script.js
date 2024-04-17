/* 20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.    */

/*
let valor1 = parseFloat(prompt("Digite o primeiro valor"));

let valor2 = parseFloat(prompt("Digite o segundo valor"));

if (valor1 > valor2) {
    alert("O primeiro valor é maior.");
} else if (valor2 > valor1) {
    alert("O segundo valor é maior.");
} */ 



let numero1=parseInt(prompt("Digite o primerio valor"));

let numero2=parseInt(prompt("Digite o segundo valor"));

if (numero1 < numero2){
    console.log(`Em ordem crescente: ${numero1}, ${numero2}`)
} else {
    console.log(`Em ordem crescente: ${numero2}, ${numero1}`);
}


