console.log('------------------------------------------------------------------------------');
console.log('Atividade 3 - ponto 1');

let number1 = 2;
let number2 = 4;
let number3 = 6;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
    console.log('True');
} else {
    console.log('False');
}

console.log('------------------------------------------------------------------------------');
console.log('Atividade 3 - ponto 2');

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
    console.log('True');
} else {
    console.log('False');
}

console.log('------------------------------------------------------------------------------');
console.log('Atividade 3 - ponto 3');

const produto = 10;
const custo = 3.50;

let lucro = (produto - (custo + (custo * 0.2))) * 1000;


if (lucro < 0) {
    console.log('Erro: lucro negativo');
} else {
    console.log('Lucro positivo de:  ' + lucro);
}

('------------------------------------------------------------------------------');
console.log('Atividade 3 - ponto 4');

let salarioBruto = 3000;
let salarioParcial = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {

    salarioParcial = salarioBruto - (salarioBruto * 0.08);

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {

    salarioParcial = salarioBruto - (salarioBruto * 0.09);

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {

    salarioParcial = salarioBruto - (salarioBruto * 0.11);

} else if (salarioBruto > 5189.82) {

    salarioParcial = salarioBruto - 570.88;

}

    console.log(salarioParcial);

if (salarioParcial <= 1903.98) {
    salarioLiquido = salarioParcial;
    console.log(salarioLiquido);
} else if (salarioParcial >= 1903.99 && salarioParcial <= 2826.65) {
    salarioLiquido = salarioParcial - (salarioParcial * 0.075 - 142.80);
    console.log(salarioLiquido);
} else if (salarioParcial >= 2826.66 && salarioParcial <= 3751.05) {
    salarioLiquido = salarioParcial - ((salarioParcial * 0.15) - 354.80);
    console.log(salarioLiquido);
} else if (salarioParcial >= 3751.06 && salarioParcial <= 4664.68) {
    salarioLiquido = salarioParcial - ((salarioParcial * 0.225) - 636.13);
    console.log(salarioLiquido);
} else if (salarioParcial > 4664.68) {
    salarioLiquido = salarioParcial - ((salarioParcial * 0.275) - 869.36);
    console.log(salarioLiquido);
}
