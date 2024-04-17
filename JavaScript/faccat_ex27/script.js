/* 27) Ler um valor e escrever se é positivo, negativo ou zero */

let valor =parseInt(prompt("Digite um valor"));

if (valor >= 0){
    console.log("Valor positivo");
} else if (valor < 0){
    console.log("Valor negativo")
} else {
    console.log("O número é zero.");
}