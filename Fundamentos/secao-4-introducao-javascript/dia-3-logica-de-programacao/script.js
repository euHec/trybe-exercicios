// console.log('-----------------');
// console.log('Ponto 1');
// 
// let number = 1;
// 
// if (number > 1){
    // for (let i = number - 1; i > 1; i-= 1) {
        // number *= i;
    // }
// }
// 
// console.log(number);
// 
// console.log('-----------------');
// console.log('Ponto 2');
// 
// let letter = 'banana';
// let reverse = "";
// 
// for (let index = 0; index < letter.length; index+= 1) {
    // reverse += letter[letter.length -1 - index];
    // 
// }
// 
// console.log(reverse);
// 
// console.log('-----------------');
// console.log('Ponto 3');

// // dúvida a ser tirada

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let heigtherWord = array[0].length;
// let smallerWord = array[0].length;

// for (let index = 1; index < array.length; index+=1) {
    
//     if (array[index].length > heigtherWord){
//         heigtherWord = array[index];
//     }
       
// }

// for (let index = 1; index < array.length; index+=1) {
    
//     if (array[index].length < smallerWord){
//         smallerWord = array[index];
//     }
       
// }

// console.log('A maior palavra é: ' + heigtherWord + ' que tem ' + heigtherWord.length + ' palavras');
// console.log('A menor palavra é: ' + smallerWord + ' que tem ' + smallerWord.length + ' palavras');

// console.log('-----------------');
// console.log('Ponto 4');

// let numberP = 5;

// if (numberP % numberP === 0 && numberP % 1 === 0){
//     console.log('O número ' + numberP + ' é um número primo');
// }
        //não consegui realizar a resolução

// console.log('-----------------');
// console.log('Exercicio bônus 1');

const n = 5;
// let caractere = '*';
// let print = '';

//     for (let b = 0; b < n; b+=1) {
//         print = print + caractere;
//     }

//     for (let c = 0; c < n; c+=1) {
//         console.log(print);
//     }

// console.log('-----------------');
// console.log('Exercicio bônus 2');

// let printf = '';

//     for (let x = 0; x < n; x+=1) {
//         printf += '*';
//         console.log(printf);
//     }

console.log('-----------------');
console.log('Exercicio bônus 3');

let println = '';
let verificacao = n;

    for (let linha = 0; linha < n; linha += 1) {
        for(let coluna = 0; coluna <= n; coluna += 1){
            if (coluna < verificacao) {
                println = println + ' ';
            } else {
                println = println + '*';
            }
        }
    
        console.log(println);
        verificacao -= 1;
        println = '';
    }
