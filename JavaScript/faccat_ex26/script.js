/* 20) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.     */

let quantidade_atual = parseFloat(prompt("Digite a quantidade atual em estoque"));

let quantidade_maxima = parseFloat(prompt("Digite a quantidade máxima em estoque"));

let quantidade_minima = parseFloat(prompt("Digite a quantidade minima em estoque")); 

let quantidade_media = (quantidade_maxima + quantidade_minima) /2

if (quantidade_atual >= quantidade_media){
    console.log("Não efetuar compra")
} else {
    console.log("Efetuar compra")
}