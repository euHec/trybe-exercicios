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
console.log('-----------------');
console.log('Ponto 3');

// dúvida a ser tirada

let array = ['java', 'javascript', 'python', 'html', 'css'];

let heigtherWord = array[0].length;
let smallerWord = array[0].length;

for (let index = 1; index < array.length; index+=1) {
    
    if (array[index].length > heigtherWord){
        heigtherWord = array[index];
    }
       
}

for (let index = 1; index < array.length; index+=1) {
    
    if (array[index].length < smallerWord){
        smallerWord = array[index];
    }
       
}

console.log('A maior palavra é: ' + heigtherWord + ' que tem ' + heigtherWord.length + ' palavras');
console.log('A menor palavra é: ' + smallerWord + ' que tem ' + smallerWord.length + ' palavras');