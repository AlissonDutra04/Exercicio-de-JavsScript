/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição. */




let lerNota1 = parseFloat(prompt("Digite a 1 nota: "))

let lerNota2 = parseFloat(prompt("Digite a 2 nota: "))

let lerNota3 = parseFloat(prompt("Digite a 3 nota: "))

let lerNota4 = parseFloat(prompt("Digite a 4 nota: "))

let media

media = (lerNota1 + lerNota2 + lerNota3 + lerNota4) /4

if (media > 5){
    alert("O aluno foi aprovado com a media de: "+ media) 
} else{
    alert("O aluno foi reprovado com a media de: "+ media)
}   