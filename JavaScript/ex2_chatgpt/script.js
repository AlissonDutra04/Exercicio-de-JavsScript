/*Crie um programa que solicite ao usuário que insira um número. Em seguida, imprima os números de 1 até o número inserido pelo usuário. */



// Solicita ao usuário que insira um número e converte a entrada para um número inteiro
let numero = parseInt(prompt("Insira um número:"));

// Inicializa a variável 'i' com o valor 1
let i = 1;

// Imprime os números de 1 até o número inserido pelo usuário
do {
  console.log(i);
  i++;
} while (i <= numero);
