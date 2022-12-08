// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

console.log('------------------------------------------------------------------------------');
console.log('Atividade 1');

const number1 = 10;
const number2 = 15;

let adicao = number1 + number2;
let subtracao = number1 - number2;
let multiplicacao = number1 * number2;
let divisao = number1 / number2;
let modulo = number1 % number2;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 1');

if (number1 > number2) {
    console.log('Numero 1 é maior que o número 2');
} else {
    console.log('Numero 2 é maior que o número 1');
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 2');

const num1 = 1;
const num2 = 15;
const num3 = 20;

if (num1 > num2 && num1 > num3) {
    console.log('numero 1 é o maior');
} else if (num2 > num1 && num2 > num3) {
    console.log('numero 2 é o maior');
} else if (num3 > num2 && num3 > num1) {
    console.log('número 3 é o maior');
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 3');

const n1 = 5;

if (Math.sign(n1) === -1) {
    console.log('Valor negativo');
} else {
    console.log ('Valor é positivo')
}

// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 4');

let angle1 = -30;
let angle2 = 70;
let angle3 = 80;
let sum = angle1 + angle2 + angle3;
let validation = angle1 > 0 && angle2 > 0 && angle3 > 0;

    if (validation) {
        if (sum === 180) {
            console.log('é um angulo válido');
        } else {
            console.log('nao é um triangulo');
        }
    } else {
        console.log('Angulo inválido');
    }

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 5');

let part = 'Bispo';

    switch (part.toLowerCase()) {

        case 'peao':
            console.log('Peões: Só podem se mover uma casa ou duas casas para frente (durante a primeira jogada), e também podem matar na diagonal peças do time adversário.');
            break;
        case 'bispo':
            console.log('Bispo: Se movimenta somente na diagonal por todo o tabuleiro.');
            break;    
        case 'rainha':
            console.log('Rainha: Pode se movimentar para qualquer lado e direção.');
            break;
        case 'rei':
            console.log('Rei: Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.');
            break;       
        case 'Torre':
            console.log('Torre: Se movimentam em linha reta ou para os lados, por todas as casas.');
            break; 
        case 'Cavalo':
            console.log('Cavalo: Se movimenta em L.');
            break;
        default:
            console.log('Peça inválida');
            break;
    }

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. 
// Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

console.log('------------------------------------------------------------------------------');
console.log('Atividade 2 - ponto 6');

let note = 50;

if (note >= 90 && note <= 100) {
    console.log('A');
} else if (note >= 80 && note < 90) {
    console.log('B');
} else if (note >= 70 && note <80) {
    console.log('C');
} else if (note >= 60 && note < 70) {
    console.log('D');
} else if (note >= 50 && note <60) {
    console.log('E');
} else if (note < 50 && note > 0) {
    console.log('F');
} else {
    console.log('erro');
}