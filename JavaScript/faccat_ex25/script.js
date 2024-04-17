/* 25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.     */

let conta_cliente = parseFloat(prompt("Digite o numero da sua conta bancaria: "));

let saldo = parseFloat(prompt("Digite o seu saldo: "));

let debito = parseFloat(prompt("Digite o seu debito "));

let credito = parseFloat(prompt("Digite o seu credito "));

saldoAtual = (saldo - debito + credito);

if (saldoAtual >= 0){
    console.log("Saldo positivo")
} else{
    console.log("Saldo negativo")
}
