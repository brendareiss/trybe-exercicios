let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 0; index < numbers.length; index +=1) {
//  console.log(numbers[index]);
//}


let result = 0;
//for (let index = 0; index < numbers.length; index +=1) {
//    result += numbers[index];
//}

//console.log(result);


//sum = 0;

//for (let index = 0; index < numbers.length; index +=1) {
//    sum += numbers[index];
//}

//let average = sum / numbers.length;

//if (result > 20) {
//    console.log("valor maior que 20");
//} else {
//    console.log("valor menor ou igual que 20");
//}

//let higherNumber = numbers[0];

//for (let index = 0; index < numbers.length; index +=1) {
//    if (numbers[index] > higherNumber) {
//        higherNumber = numbers[index];
//    }
//}

//console.log(higherNumber);


//for (let index = 0; index < numbers.length; index += 1) {
//    if (numbers[index] % 2 !== 0) {
//        result += 1;
//    }
//}

//if (result === 0){
//    console.log("nenhum valor ímpar encontrado");
//} else {
//    console.log(result);
//}


//let smallestNumber = numbers[0];

//for (let index = 1; index < numbers.length; index += 1) {
//  if (numbers[index] < smallestNumber) {
//    smallestNumber = numbers[index];
//  }
//}

//console.log(smallestNumber);


//for (let index = 0; index < numbers.length; index += 1) {
//    console.log(numbers[index] / 2);
//  };


//let fatorial = 1;

//for (let index = 10; index > 0; index -= 1) {
//  fatorial *= index;
//}

//console.log(fatorial);

//let word = 'brenda';
//let reverseWord = '';

//for (let index = 0; index < word.length; index += 1) {
//  reverseWord += word[word.length - 1 - index];
//}

//console.log(reverseWord);


let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 1; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

