console.log('-----------------');
console.log('Ponto 1');

let number = 1;

if (number > 1){
    for (let i = number - 1; i > 1; i-= 1) {
        number *= i;
    }
}

console.log(number);

console.log('-----------------');
console.log('Ponto 2');

let letter = 'banana';
let reverse = "";

for (let index = 0; index < letter.length; index+= 1) {
    reverse += letter[letter.length -1 - index];
    
}

console.log(reverse);

console.log('-----------------');
console.log('Ponto 2');