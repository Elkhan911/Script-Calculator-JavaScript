function calculator(string) {
  let arr = string.split(" ");
  if (arr.includes("+")) {
    return Number(arr[0]) + Number(arr[2]);
  }
  if (arr.includes("-")) {
    return Number(arr[0] - Number(arr[2]));
  }
}

// Сложение  ++++
// console.log(calculator("1 + 1"));
// console.log(calculator("1 + 2"));
// console.log(calculator("4 + 3"));
// console.log(calculator("10 + 10"));

// Вычитание ++++
// console.log(calculator("10 - 1"));
// console.log(calculator("5 - 4"));
// console.log(calculator("4 - 4"));
// console.log(calculator("1 - 10"));
// console.log(calculator("4 - 5"));
