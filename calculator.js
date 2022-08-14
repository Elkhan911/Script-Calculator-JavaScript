function takeArabicNumber(romanNumb) {
  let romanNumbers = [
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  for (let i = 0; i < romanNumbers.length; i++) {
    return romanNumbers.indexOf(romanNumb);
  }
}

function isArabianNumb(numb) {
  let newArr = numb.split("");
  if (newArr.includes("X") || newArr.includes("I") || newArr.includes("V")) {
    return false;
  } else return true;
}

function calculator(string) {
  let arr = string.split(" ");

  for (let elem of arr) {
    if (isArabianNumb(elem)) {
      if (arr.includes("+")) {
        return Number(arr[0]) + Number(arr[2]);
      }
      if (arr.includes("-")) {
        return Number(arr[0] - Number(arr[2]));
      }
      if (arr.includes("*")) {
        return Number(arr[0]) * Number(arr[2]);
      }
      if (arr.includes("/")) {
        return Math.trunc(Number(arr[0]) / Number(arr[2]));
      }
    }
    if (!isArabianNumb(elem)) {
      if (arr.includes("+")) {
        return takeArabicNumber(arr[0]) + takeArabicNumber(arr[2]);
      }
      if (arr.includes("-")) {
        return takeArabicNumber(arr[0]) - takeArabicNumber(arr[2]);
      }
      if (arr.includes("*")) {
        return takeArabicNumber(arr[0]) * takeArabicNumber(arr[2]);
      }
      if (arr.includes("/")) {
        return Math.trunc(takeArabicNumber(arr[0]) / takeArabicNumber(arr[2]));
      }
    }
  }
}

// Сложение ++++
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

// Уможение ++++
// console.log(calculator("10 * 10"));
// console.log(calculator("4 * 10"));
// console.log(calculator("5 * 1"));
// console.log(calculator("5 * 5"));

// Деление ++++
// console.log(calculator("10 / 1"));
// console.log(calculator("6 / 2"));
// console.log(calculator("5 / 4"));
// console.log(calculator("2 / 4"));

// Римское сложение ++++
// console.log(calculator("I + I"));
// console.log(calculator("I + II"));
// console.log(calculator("IV + III"));
// console.log(calculator("X + X"));
// console.log(calculator("X + IX"));

// Римское вычитание ++++
// console.log(calculator("X - I"));
// console.log(calculator("V - IV"));
// console.log(calculator("IV - IV"));
// console.log(calculator("I - X"));
// console.log(calculator("IV - V"));

// Римское умножение ++++
// console.log(calculator("X * X"));
// console.log(calculator("IV * X"));
// console.log(calculator("V * I"));
// console.log(calculator("V * V"));

// Римское деление
// console.log(calculator("X / I"));
// console.log(calculator("VI / II"));
// console.log(calculator("V / IV"));
// console.log(calculator("II / IV"));
