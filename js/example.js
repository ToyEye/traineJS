// // Сумма

// const summa = [23, 85, 34, 150, 17, 64];
// let totalPrice = 0;
// for (let i = 0; i < summa.length; i += 1) {
//     console.log(summa[i]);
//     totalPrice += summa[i];
// }
// console.log('Total: ', totalPrice);

// // Сумма четных чисел

// const numbers = [23, 85, 34, 150, 17, 64, 38, 15, 63, 75, 18, 8, 4];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     // console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         console.log('Оно чётное!');
//         total += numbers[i];
//     }
// }
// console.log('Total: ', total);

// // Самое большое число
// const randoms = [23, 85, 34, 150, 17, 64, 38, 15, 63, 75, 18, 8, 4];
// bigNumber = randoms[0];
// for (random of randoms) {
//     if (random < bigNumber) {
//         bigNumber = random;
//     }
// }
// console.log(bigNumber);

// Самое длинное слово
// function findLongestWord(string) {
//   // Change code below this line
//  const word = string.split(' ');
//   let biggest = word[0];
// for ( let i = 1; i < word.length; i += 1){
// 	if (biggest.length < word[i].length){
//     	biggest = word[i];
//     } 

// }
// return biggest;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");





// function slugify(title) {
//   // Change code below this line
//   let slug ;
//   let lowerCase ;
//   lowerCase = title.toLowerCase();
// 	// slug = lowerCase.join('-');
  
//   return lowerCase;

//   // Change code above this line
// }

// slugify('How to become a JUNIOR developer for TWO WEEKS')