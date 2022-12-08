console.log('---------------------');
console.log('atividade 1 - ponto 1');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);
}

console.log('---------------------');
console.log('atividade 1 - ponto 2');

for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];
}

console.log(sum);

console.log('---------------------');
console.log('atividade 1 - ponto 3');

let avarege = sum /numbers.length;

console.log(numbers.length);
console.log(avarege);

console.log('---------------------');
console.log('atividade 1 - ponto 4');

if (avarege > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log('---------------------');
console.log('atividade 1 - ponto 5');

    let a = numbers[0];

    for (let x = 1; x < numbers.length; x+=1) {    
        
        if (a < numbers[x]) {
            a = numbers[x]
        }
    }


console.log(a);

console.log('---------------------');
console.log('atividade 1 - ponto 6');

let cont = 0;

for (let i = 0; i <= numbers.length; i+=1) {
    if (numbers[i]% 2 !== 0){
        cont += 1;
    }
}

    if (cont > 0){
        console.log(cont);
    } else {
        console.log('Nenhum valor ímpar encontrado');
    }

console.log('---------------------');
console.log('atividade 1 - ponto 7');

let c = numbers[0];

for (let x = 1; x < numbers.length; x+=1) {    
    
    if (c > numbers[x]) {
        c = numbers[x]
    }
}

console.log(c);

console.log('---------------------');
console.log('atividade 1 - ponto 8');

let d = [];

for (let index = 1; index <= 25 ; index+= 1) {
    d.push(index);
}

console.log(d);

console.log('---------------------');
console.log('atividade 1 - ponto 9');

for (let index = 0; index < d.length; index+= 1) {
    let result = d[index]/2;
    console.log('O resultado é: ' + result);    
}