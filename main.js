// function arraySum(array) {
//   var sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(arraySum(array));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// function arraySumRec(array, index, sum) {
//   return index >= array.length
//     ? sum
//     : arraySumRec(array, index + 1, sum + array[index]);
// }

// function arraySumRec(array, pointer = 0) {
//   return typeof array[pointer + 1] != "undefined"
//     ? array[pointer - 1]
//     : arraySumRec((array[pointer] += array[pointer - 1]), pointer + 1);
// }

// console.log(arraySumRec(array, 0));

const a = [1, 2, 3, 4, 5];

function arrSum(arr, p = 1) {
  let x = p - 1;
  return !arr[p] ? arr[x] : arrSum(((arr[p] += arr[x]), arr), p + 1);
}

console.log(arrSum(a));

// const a = [1, 2, 3, 4, 5];

// function arrSum(arr, p = 1) {
//   if (!arr[p]) {
//     return arr[p - 1];
//   }
//   arr[p] += arr[p - 1];
//   return arrSum(arr, p + 1);
// }

// console.log(arrSum(a));

// rgb to hsl
