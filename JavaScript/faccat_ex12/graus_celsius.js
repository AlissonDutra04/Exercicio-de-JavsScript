/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor 
correspondente em graus Celsius (baseado na fórmula abaixo): 
 C                 F - 32 
 ---------- = -----------
 5                 9          */


 var fahrenheit,celsius ;


 fahrenheit = parseFloat(prompt("Digite a temperatura em graus fahrenheit"));

 celsius = (fahrenheit - 32) * (5/9);

 alert("A temperatura em graus celsius é"+ celsius);