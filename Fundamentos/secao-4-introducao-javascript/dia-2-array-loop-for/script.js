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