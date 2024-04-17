/*Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. */

// Declarando as variáveis para as notas e média do aluno
let nota1 = parseFloat(prompt('Digite a primeira nota:'));

let nota2 = parseFloat(prompt('Digite a segunda nota:'));

let nota3 = parseFloat(prompt('Digite a terceira nota:'));

let nota4 = parseFloat(prompt('Digite a quarta nota:'));

// Calculando a média das notas
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verificando se o aluno foi aprovado ou precisa de exame
if (media >= 7) {
    console.log('O aluno foi aprovado com média ' + media + '.');
} else {
    let notaExame = parseFloat(prompt('Digite a nota do exame:'));
    let novaMedia = (media + notaExame) / 2;

    console.log('Média antes do exame: ' + media);
    
    if (novaMedia >= 5) {
        console.log('O aluno foi aprovado em exame com média ' + novaMedia + '.');
    } else {
        console.log('O aluno foi reprovado com média ' + novaMedia + '.');
    }
}
