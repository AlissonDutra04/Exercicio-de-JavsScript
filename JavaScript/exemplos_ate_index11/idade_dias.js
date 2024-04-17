/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/

var anos, meses, dias, idade;

alert("Vamos calcular a sua idade em anos, meses e dias");

anos=parseInt(prompt("Digite sua idade em anos:"));

meses=parseInt(prompt("Digite a quantidade de meses completos que passou do seu ultimo aniversario"));

dias=parseInt(prompt("Digite a quantidade de dias que se passou do seu ultimo mesversario"));

idade= (anos * 365 + meses * 30 + dias);

alert("Você completou " + idade+ " dias de vida.")